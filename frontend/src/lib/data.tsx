import {
  LuBuilding,
  LuPlane,
  LuBook,
  LuBoxes,
  LuUserSquare,
} from "react-icons/lu";

export const services = [
  {
    id: 1,
    name: "pemberitahuan",
    icon: <LuBuilding className="w-10 h-10" />,
  },
  {
    id: 2,
    name: "transportasi",
    icon: <LuPlane className="w-10 h-10" />,
  },
  {
    id: 3,
    name: "dokumen",
    icon: <LuBook className="w-10 h-10" />,
  },
  {
    id: 4,
    name: "komoditi",
    icon: <LuBoxes className="w-10 h-10" />,
  },
  {
    id: 5,
    name: "layanan",
    icon: <LuUserSquare className="w-10 h-10" />,
  },
];
