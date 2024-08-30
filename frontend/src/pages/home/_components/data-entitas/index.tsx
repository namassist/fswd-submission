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

export default function DataEntitasTab({ data }: { data: any }) {
  return (
    <form className="space-y-5">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Select defaultValue={data?.pengusaha?.ur_entitas}>
          <Label htmlFor="ur_entitas" className="capitalize">
            Jenis Pemberitahuan
          </Label>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Pilih Jenis Pemberitahuan" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Jenis Pemberitahuan</SelectLabel>
              <SelectItem value={data?.pengusaha?.ur_entitas}>
                {data?.pengusaha?.ur_entitas}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <hr />
      <h1 className="text-xl">Pengusaha</h1>
      <div className="grid grid-cols-3 gap-5">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Select disabled defaultValue={data?.ur_jenis_identitas}>
            <Label htmlFor="ur_jenis_identitas" className="capitalize">
              Jenis Identitas
            </Label>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Jenis Identitas" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Jenis Identitas</SelectLabel>
                <SelectItem value={data?.pengusaha?.ur_jenis_identitas}>
                  {data?.pengusaha?.ur_jenis_identitas}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="tanggal_pendaftaran" className="capitalize">
            NIB
          </Label>
          <Input
            type="text"
            id="nib"
            placeholder="NIB"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={data?.pengusaha?.nib}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="tanggal_pendaftaran" className="capitalize">
            No Identitas
          </Label>
          <Input
            type="text"
            id="nib"
            placeholder="NIB"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={data?.pengusaha?.nomor_identitas}
          />
        </div>
      </div>
      <div className="flex w-full items-center gap-5">
        <div className="grid w-4/12 items-center gap-1.5">
          <Label htmlFor="tanggal_pendaftaran" className="capitalize">
            No Identitas
          </Label>
          <Input
            type="text"
            id="nib"
            placeholder="NIB"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={data?.pengusaha?.nomor_identitas}
          />
        </div>
        <div className="grid w-8/12 items-center gap-1.5">
          <Label htmlFor="tanggal_pendaftaran" className="capitalize">
            Nama Perusahaan
          </Label>
          <Input
            type="text"
            id="nib"
            placeholder="NIB"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={data?.pengusaha?.nama_identitas}
          />
        </div>
      </div>
      <div className="grid grid-cols-5 items-center gap-5">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Select disabled defaultValue={data?.pengusaha?.provinsi_identitas}>
            <Label htmlFor="ur_entitas" className="capitalize">
              Provinsi
            </Label>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Provinsi" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Provinsi</SelectLabel>
                <SelectItem value={data?.pengusaha?.provinsi_identitas}>
                  {data?.pengusaha?.provinsi_identitas}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid max-w-sm items-center gap-1.5">
          <Label htmlFor="tanggal_pendaftaran" className="capitalize">
            Kota / Kabupaten
          </Label>
          <Input
            type="text"
            id="nib"
            placeholder="NIB"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={data?.pengusaha?.kota_identitas}
          />
        </div>
        <div className="grid max-w-sm items-center gap-1.5">
          <Label htmlFor="tanggal_pendaftaran" className="capitalize">
            Kecamatan
          </Label>
          <Input
            type="text"
            id="nib"
            placeholder="NIB"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={data?.pengusaha?.kecamatan}
          />
        </div>
        <div className="grid max-w-sm items-center gap-1.5">
          <Label htmlFor="tanggal_pendaftaran" className="capitalize">
            Kode Pos
          </Label>
          <Input
            type="text"
            id="nib"
            placeholder="NIB"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={data?.pengusaha?.kode_pos}
          />
        </div>
        <div className="grid max-w-sm items-center gap-1.5">
          <Label htmlFor="tanggal_pendaftaran" className="capitalize">
            RT / RW
          </Label>
          <Input
            type="text"
            id="nib"
            placeholder="NIB"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={data?.pengusaha?.rt_rw}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 items-center gap-5">
        <div className="grid max-w-sm items-center gap-1.5">
          <Label htmlFor="tanggal_pendaftaran" className="capitalize">
            Telephone
          </Label>
          <Input
            type="text"
            id="nib"
            placeholder="telephone"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={data?.pengusaha?.tlp_identitas}
          />
        </div>
        <div className="grid max-w-sm items-center gap-1.5">
          <Label htmlFor="tanggal_pendaftaran" className="capitalize">
            Email
          </Label>
          <Input
            type="text"
            id="nib"
            placeholder="NIB"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={data?.pengusaha?.email_identitas}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Select disabled defaultValue={data?.pengusaha?.status}>
            <Label htmlFor="ur_entitas" className="capitalize">
              Status
            </Label>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Provinsi</SelectLabel>
                <SelectItem value={data?.pengusaha?.status}>
                  {data?.pengusaha?.status}
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
