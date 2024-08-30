import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  return (
    <header className="w-full min-h-14 shadow-lg">
      <nav className="bg-blue-900 w-full min-h-14 flex justify-center items-center text-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p>INSW</p>
            <div className="flex gap-3 items-center">
              <p>Senin, 22 Juli 2024 - 15:17:27</p>
              <Avatar>
                <AvatarImage
                  src="https://github.com/namassist.png"
                  alt="namassist"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mx-auto py-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <p>/ Beranda</p>
            <p>/ SSM QC</p>
          </div>
          <div className="flex gap-10">
            <p>Beranda Permohonan</p>
            <p>Beranda Menu</p>
          </div>
        </div>
      </div>
    </header>
  );
}
