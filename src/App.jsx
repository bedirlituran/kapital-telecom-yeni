import { useRef } from "react";
import Kompaniya from "./components/Kompaniya";
import Korporativ from "./components/Korporativ";
import Reklam from "./components/Reklam";
import Tarif from "./components/Tarif";
import Xidmet from "./components/Xidmet";
import Footer from "./components/Footer";
import Navbar from "./components/Hero";
import Haqqimizda from "./Haqqimizda";
import { Routes, Route } from "react-router-dom";
import Kanallar from "./Kanallar";
import WhatsappButton from "./components/WhatsAppButton";
function App() {
  const kompaniyaRef = useRef(null);
  const footref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
<div className="overflow-x-hidden flex-col">
<Routes>
      {/* Ana Sayfa */}
      <Route
        path="/"
        element={
          <div className="overflow-x-hidden flex-col">
            <Navbar
              onNavigate={(section) => {
                switch (section) {
                  case "kompaniya":
                    scrollToSection(kompaniyaRef);
                    break;
                  case "footer":
                      scrollToSection(footref);
                    break;
                  default:
                    break;
                }
              }}
            />
            <div>
              <Xidmet />
            </div>
            <div>
              <Reklam />
            </div>
            <div>
              <Tarif />
            </div>
            <div>
              <Korporativ />
            </div>
            <div ref={kompaniyaRef}>
              <Kompaniya />
            </div>
            <div ref={footref}>
              <Footer />
            </div>
          </div>
        }
      />
      {/* ChannelList Sayfası */}
      <Route path="/Haqqimizda" element={<Haqqimizda />} />
      <Route path="/Kanallar" element={<Kanallar />}/>
    </Routes>
    <WhatsappButton/>
</div>
  );
}

export default App;
