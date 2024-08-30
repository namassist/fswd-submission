/* eslint-disable @typescript-eslint/no-explicit-any */
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

export default function DataUtamaTab({ data }: { data: any }) {
  return (
    <form className="space-y-5">
      <div className="grid grid-cols-4 gap-5">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="nomor_pengajuan" className="capitalize">
            nomor pengajuan
          </Label>
          <Input
            type="text"
            id="nomor_pengajuan"
            placeholder="nomor pengajuan"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={data?.nomor_pengajuan}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="tanggal_pengajuan" className="capitalize">
            tanggal pengajuan
          </Label>
          <Input
            type="text"
            id="tanggal_pengajuan"
            placeholder="tanggal_pengajuan"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={data?.tanggal_pengajuan}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="nomor_pendaftaran" className="capitalize">
            nomor pendaftaran
          </Label>
          <Input
            type="text"
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
          <Label htmlFor="tanggal_pendaftaran" className="capitalize">
            tanggal pendaftaran
          </Label>
          <Input
            type="text"
            id="tanggal_pendaftaran"
            placeholder="tanggal pendaftaran"
            disabled
            className="disabled:bg-gray-300"
            defaultValue={
              data?.tanggal_pendaftaran !== null
                ? data?.tanggal_pendaftaran
                : "Tanggal Pendaftaran"
            }
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Select defaultValue={data?.ur_pabean_asal}>
            <Label htmlFor="ur_pabean_asal" className="capitalize">
              Kantor Pabean
            </Label>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Kantor Pabean" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Kantor Pabean</SelectLabel>
                <SelectItem value={data?.ur_pabean_asal}>
                  {data?.ur_pabean_asal}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Select disabled defaultValue={data?.kd_skep_fasilitas}>
            <Label htmlFor="kd_skep_fasilitas" className="capitalize">
              SKEP Fasilitas
            </Label>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih SKEP Fasilitas" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>SKEP Fasilitas</SelectLabel>
                <SelectItem value={data?.kd_skep_fasilitas}>
                  {data?.kd_skep_fasilitas}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Select disabled defaultValue={data?.ur_jenis_pib}>
            <Label htmlFor="ur_jenis_pib" className="capitalize">
              Jenis PIB
            </Label>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Jenis PIB" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Jenis PIB</SelectLabel>
                <SelectItem value={data?.ur_jenis_pib}>
                  {data?.ur_jenis_pib}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Select disabled defaultValue={data?.ur_jenis_impor}>
            <Label htmlFor="ur_jenis_impor" className="capitalize">
              Jenis Impor
            </Label>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Jenis Impor" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Kantor Pabean</SelectLabel>
                <SelectItem value={data?.ur_jenis_impor}>
                  {data?.ur_jenis_impor}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Select disabled defaultValue={data?.ur_cara_bayar}>
            <Label htmlFor="ur_cara_bayar" className="capitalize">
              Cara Pembayaran
            </Label>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Cara Pembayaran" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Cara Pembayaran</SelectLabel>
                <SelectItem value={data?.ur_cara_bayar}>
                  {data?.ur_cara_bayar}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Select disabled defaultValue={data?.ur_transaksi_impor}>
            <Label htmlFor="ur_transaksi_impor" className="capitalize">
              Transaksi
            </Label>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Transaksi" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Transaksi</SelectLabel>
                <SelectItem value={data?.ur_transaksi_impor}>
                  {data?.ur_transaksi_impor}
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
