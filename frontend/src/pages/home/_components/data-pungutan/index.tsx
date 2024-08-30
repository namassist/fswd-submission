import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function DataPungutanTab({ data }: { data: any }) {
  return (
    <form className="space-y-5">
      <div className="grid grid-cols-3 gap-5">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Select defaultValue={data?.ur_incoterm}>
            <Label htmlFor="ur_incoterm" className="capitalize">
              Incoterms
            </Label>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Incoterms" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Incoterms</SelectLabel>
                <SelectItem value={data?.kd_incoterm}>
                  {data?.ur_incoterm}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Select defaultValue={data?.ur_valuta}>
            <Label htmlFor="kd_skep_fasilitas" className="capitalize">
              Valuta
            </Label>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Valuta" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Valuta</SelectLabel>
                <SelectItem value={data?.kd_valuta}>
                  {data?.ur_valuta}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="nilai_kurs" className="capitalize">
            Kurs
          </Label>
          <Input
            type="text"
            id="nilai_kurs"
            placeholder="tanggal pendaftaran"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={data?.nilai_kurs}
          />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-5">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="nomor_pendaftaran" className="capitalize">
            Nilai
          </Label>
          <Input
            type="number"
            id="nomor_pendaftaran"
            placeholder="nomor pendaftaran"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={
              data?.nomor_pendaftaran !== null
                ? data?.nomor_pendaftaran
                : "Nomor Pendaftaran"
            }
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="nomor_pendaftaran" className="capitalize">
            Biaya Tambahan
          </Label>
          <Input
            type="number"
            id="nomor_pendaftaran"
            placeholder="nomor pendaftaran"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={data?.biaya_tambahan}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="nomor_pendaftaran" className="capitalize">
            Biaya Pengurang
          </Label>
          <Input
            type="number"
            id="nomor_pendaftaran"
            placeholder="nomor pendaftaran"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={data?.biaya_pengurang}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="nomor_pendaftaran" className="capitalize">
            Voluntary Declaration
          </Label>
          <Input
            type="number"
            id="nomor_pendaftaran"
            placeholder="nomor pendaftaran"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={data?.nilai_maklon}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="nomor_pendaftaran" className="capitalize">
            Nilai FOB
          </Label>
          <Input
            type="number"
            id="nomor_pendaftaran"
            placeholder="nomor pendaftaran"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={data?.fob}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Select defaultValue={data?.ur_asuransi}>
            <Label htmlFor="ur_incoterm" className="capitalize">
              Asuransi Bayar Di
            </Label>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Asuransi Bayar Di" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Asuransi Bayar Di</SelectLabel>
                <SelectItem value={data?.ur_asuransi}>
                  {data?.ur_asuransi}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="nilai_kurs" className="capitalize">
            Asuransi
          </Label>
          <Input
            type="number"
            id="nilai_kurs"
            placeholder="tanggal pendaftaran"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={data?.nilai_asuransi}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="nilai_kurs" className="capitalize">
            Freight
          </Label>
          <Input
            type="text"
            id="nilai_kurs"
            placeholder="tanggal pendaftaran"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={data?.freight}
          />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-5">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="nilai_kurs" className="capitalize">
            CIF
          </Label>
          <Input
            type="number"
            id="nilai_kurs"
            placeholder="tanggal pendaftaran"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={
              parseInt(data?.nilai_asuransi) +
              parseInt(data?.fob) +
              parseInt(data?.freight)
            }
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="nilai_kurs" className="capitalize">
            Bruto
          </Label>
          <Input
            type="text"
            id="nilai_kurs"
            placeholder="tanggal pendaftaran"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={data?.berat_bersih}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="nilai_kurs" className="capitalize">
            Neto
          </Label>
          <Input
            type="text"
            id="nilai_kurs"
            placeholder="tanggal pendaftaran"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={data?.berat_kotor}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="nilai_kurs" className="capitalize">
            CIF Rp
          </Label>
          <Input
            type="text"
            id="nilai_kurs"
            placeholder="tanggal pendaftaran"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={
              (parseInt(data?.nilai_asuransi) +
                parseInt(data?.fob) +
                parseInt(data?.freight)) *
              parseInt(data?.nilai_kurs)
            }
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Select defaultValue={data?.ur_flag_curah}>
            <Label htmlFor="ur_incoterm" className="capitalize">
              Flag Kontainer
            </Label>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Flag Container" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Flag Container</SelectLabel>
                <SelectItem value={data?.ur_flag_curah}>
                  {data?.ur_flag_curah}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <Button
          size={"sm"}
          variant={"outline"}
          className="border-blue-900 text-gray-400"
        >
          Sebelumnya
        </Button>
        <Button
          size="sm"
          variant={"outline"}
          className="border-blue-900 text-blue-900"
        >
          Selanjutnya
        </Button>
      </div>
    </form>
  );
}
