const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bodyParser = require("body-parser");

const prisma = new PrismaClient();
const app = express();
app.use(bodyParser.json());

app.post("/api/data-pungutan", async (req, res) => {
  const { id, no_pengajuan, kswp, details } = req.body;

  try {
    // Validasi input
    if (!no_pengajuan || !kswp || !details || details.length === 0) {
      return res
        .status(400)
        .json({ error: "All required fields must be filled!" });
    }

    console.log(details);

    // Re-check perhitungan dan validasi detail
    for (let detail of details) {
      if (
        !detail.incoterms ||
        !detail.valuta ||
        !detail.kurs ||
        !detail.nilai ||
        !detail.freight ||
        !detail.asuransi ||
        !detail.flag_kontainer
      ) {
        return res
          .status(400)
          .json({ error: "All required detail fields must be filled!" });
      }

      detail.nilai_fob =
        detail.nilai +
        detail.biaya_tambahan -
        detail.biaya_pengurang +
        detail.voluntary_declaration;
      detail.cif = detail.nilai_fob + detail.asuransi + detail.freight;
      detail.cif_rp = detail.cif * detail.kurs;
    }

    console.log(details);

    let header;
    if (id) {
      header = await prisma.header.update({
        where: { id: parseInt(id) },
        data: {
          no_pengajuan,
          kswp,
          details: {
            deleteMany: {},
            create: details,
          },
        },
      });
    } else {
      header = await prisma.header.create({
        data: {
          no_pengajuan,
          kswp,
          details: {
            create: details,
          },
        },
        select: {
          id: true,
          no_pengajuan: true,
          kswp: true,
          details: true,
        },
      });
    }

    res.json(header);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
