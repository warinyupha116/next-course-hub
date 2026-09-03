import React from "react";
import BandCard from "../../components/BandCard";


import { band_cocktail } from "../../type/band_cocktail"; 
import { band_Tilly_Birds } from "../../type/band_Tilly_Birds";
import { PiXXiE_bands } from "../../type/PiXXiE_bands"; 

export default function BandsPage() {

  const allBands = [band_cocktail, band_Tilly_Birds, PiXXiE_bands].filter(Boolean);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-950 mb-2">
           วงดนตรีที่ฉันชื่นชอบ;-;
          </h1>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 band-grid">
          {allBands.map((band: any, index) => (
            <BandCard key={band?.id || index} band={band} />
          ))}
        </div>
        
      </div>
    </main>
  );
}
