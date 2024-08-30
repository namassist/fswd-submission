import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Api from "@/services/api";
import { services } from "@/lib/data";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DataUtamaTab from "./_components/data-utama";
import DataEntitasTab from "./_components/data-entitas";
import DataPungutanTab from "./_components/data-pungutan";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState(tab || "data-utama");
  const [dataUtama, setDataUtama] = useState([]);
  const [dataEntitas, setDataEntitas] = useState([]);
  const [dataPungutan, setDataPungutan] = useState([]);

  const fetchDataUtama = async () => {
    try {
      const response = await Api.get(
        "/dataUtama?nomor_pengajuan=20120B388FAE20240402000001"
      );
      setDataUtama(response.data.data);
    } catch (error) {
      console.error("There was an error fetching the data utama!", error);
    }
  };

  const fetchDataEntitas = async () => {
    try {
      const response = await Api.get(
        "/dataEntitas?id_aju=04eb6a72-bb63-5aed-5e92-f58a3bfd5da2"
      );
      setDataEntitas(response.data.data);
    } catch (error) {
      console.error("There was an error fetching the data entitas!", error);
    }
  };

  const fetchDataPungutan = async () => {
    try {
      const response = await Api.get(
        "/dataPungutan?id_aju=04eb6a72-bb63-5aed-5e92-f58a3bfd5da2"
      );
      setDataPungutan(response.data.data);
    } catch (error) {
      console.error("There was an error fetching the data pungutan!", error);
    }
  };

  // Fetch data only for the active tab
  useEffect(() => {
    if (activeTab === "data-utama") {
      fetchDataUtama();
    } else if (activeTab === "data-entitas") {
      fetchDataEntitas();
    } else if (activeTab === "data-pungutan") {
      fetchDataPungutan();
    }
  }, [activeTab]);

  useEffect(() => {
    setActiveTab(tab || "data-utama");
  }, [tab]);

  const handleTabChange = (value) => {
    setActiveTab(value);
    setSearchParams({ tab: value }, { replace: true });
  };

  return (
    <>
      <Header />
      <section className="bg-gray-200 py-5">
        <div className="container mx-auto">
          <div className="rounded-sm min-h-[500px] bg-white px-5 py-14 space-y-7">
            <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10">
              {services?.map((service) => (
                <div
                  className="flex flex-col items-center space-y-1 cursor-pointer"
                  key={service?.id}
                  onClick={() => handleIconClick(service?.id)}
                >
                  <div
                    className={`${
                      activeTab === service.id
                        ? "bg-indigo-200/50"
                        : "bg-gray-200/50 text-gray-400/60"
                    } rounded-full py-1 inline-block`}
                  >
                    {service?.icon}
                  </div>
                  <p
                    className={`capitalize ${
                      activeTab === service.id
                        ? "text-red-400/80"
                        : "text-gray-400/60"
                    }`}
                  >
                    {service?.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl">Data Pemberitahuan</h1>
              <p className="text-sm">
                No Pengajuan: {dataUtama?.nomor_pengajuan} | KSWP : VALID |
                Jenis API : 02
              </p>
            </div>
            <Tabs value={activeTab} onValueChange={handleTabChange}>
              <TabsList>
                <TabsTrigger value="data-utama">Data Utama</TabsTrigger>
                <TabsTrigger value="data-entitas">Data Entitas</TabsTrigger>
                <TabsTrigger value="data-pungutan">Data Pungutan</TabsTrigger>
              </TabsList>
              <TabsContent value="data-utama">
                <DataUtamaTab data={dataUtama} />
              </TabsContent>
              <TabsContent value="data-entitas">
                <DataEntitasTab data={dataEntitas} />
              </TabsContent>
              <TabsContent value="data-pungutan">
                <DataPungutanTab data={dataPungutan} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
