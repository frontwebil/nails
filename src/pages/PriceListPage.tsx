import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

type ServiceCategory = {
  name: string;
  services: Array<{
    name: string;
    price: string;
    duration?: string;
  }>;
};

function PriceListPage() {
  const categories: ServiceCategory[] = [
    {
      name: "Maniküre & Pediküre",
      services: [
        { name: "1. Maniküre mit Gellack / Shellac", price: "25 €", duration: "40 Min." },
        { name: "2. Maniküre ohne Lack", price: "15 €", duration: "15 Min." },
        { name: "3. Maniküre mit Lack", price: "20 €", duration: "25 Min." },
        { name: "4. Pediküre ohne Lack", price: "20 €", duration: "30 Min." },
        { name: "5. Pediküre mit Lack", price: "30 €", duration: "40 Min." },
        { name: "6. Pediküre mit Gellack / Shellac", price: "39 €", duration: "1 Std." },
        { name: "7. Pediküre mit Gel/Pulvergel", price: "45 €", duration: "1 Std. 15 Min." },
        { name: "8. Fußpeeling", price: "5 €", duration: "5 Min." },
        { name: "9. Handpeeling", price: "5 €", duration: "10 Min." },
        { name: "10. Fußnägel lackieren", price: "15 €", duration: "15 Min." },
        { name: "11. Fußnägel mit Gellack / Shellac", price: "25 €", duration: "30 Min." },
        { name: "12. Nagelreparatur", price: "5 €", duration: "10 Min." },
        { name: "13. Fingernägel kürzen & feilen", price: "10 €", duration: "20 Min." },
        { name: "14. Nagel Design komplett", price: "10 €", duration: "15 Min." },
        { name: "15. Strasssteine", price: "0,50 €", duration: "5 Min." },
        { name: "16. Hand-Spa", price: "15 €", duration: "30 Min." }
      ]
    },
    {
      name: "Acrylnägel / Gel & Pulver Gel",
      services: [
        { name: "17. Neues Set mit Gel (ohne Farbe)", price: "30 €" },
        { name: "18. Neues Set mit Gel (mit Farbe)", price: "33 €" },
        { name: "19. Neues Set mit Pulver Gel (ohne Farbe)", price: "30 €" },
        { name: "20. Neues Set mit Pulver Gel (mit Farbe)", price: "33 €" },
        { name: "21. Neues Set mit Acryl (ohne Farbe)", price: "30 €" },
        { name: "22. Neues Set mit Acryl (mit Farbe)", price: "33 €" },
        { name: "23. Auffüllen mit Acryl", price: "29 €" },
        { name: "24. Auffüllen mit Gel", price: "29 €" },
        { name: "25. Auffüllen mit Pulver Gel", price: "29 €" },
        { name: "26. Entfernen", price: "10 €" },
        { name: "27. Entfernen inkl. Maniküre", price: "20 €" },
        { name: "28. Neumodellage - Baby-Boomer", price: "35 €" }
      ]
    },
    {
      name: "Augenbrauen & Wimpern",
      services: [
        { name: "29. Augenbrauen färben & zupfen, Wimpern färben", price: "20 €", duration: "20 Min." },
        { name: "30. Augenbrauen & Wimpern färben", price: "15 €", duration: "20 Min." },
        { name: "31. Augenbrauen färben & zupfen", price: "15 €", duration: "20 Min." },
        { name: "32. Augenbrauen zupfen", price: "7 €", duration: "15 Min." },
        { name: "33. Augenbrauen färben", price: "8 €", duration: "15 Min." },
        { name: "34. Wimpern färben", price: "10 €", duration: "15 Min." },
        { name: "35. Wimpernwelle", price: "30 €", duration: "1 Std." }
      ]
    },
    {
      name: "Waxing (Damen & Herren)",
      services: [
        { name: "36. Damen Waxing - Intim", price: "30 €", duration: "25 Min." },
        { name: "37. Damen Waxing - Brazilian", price: "25 €", duration: "25 Min." },
        { name: "38. Damen Waxing - Hollywood", price: "30 €", duration: "25 Min." },
        { name: "39. Damen Waxing - Bikini", price: "25 €", duration: "25 Min." },
        { name: "40. Damen Waxing - Bikini & Arme", price: "55 €", duration: "50 Min." },
        { name: "41. Damen Waxing - Bikini & Beine", price: "65 €", duration: "1 Std." },
        { name: "42. Damen Waxing - Bikini & Achseln", price: "40 €", duration: "45 Min." },
        { name: "43. Damen Waxing - Beine komplett", price: "40 €", duration: "45 Min." },
        { name: "44. Damen Waxing - Achseln", price: "15 €", duration: "20 Min." },
        { name: "45. Damen Waxing - Unterarme", price: "15 €", duration: "20 Min." },
        { name: "46. Damen Waxing - Oberarme", price: "15 €", duration: "20 Min." },
        { name: "47. Damen Waxing - Arme komplett", price: "30 €", duration: "30 Min." },
        { name: "48. Damen Waxing - Pofalte", price: "10 €", duration: "20 Min." },
        { name: "49. Damen Waxing - Po", price: "10 €", duration: "25 Min." },
        { name: "50. Damen Waxing - Gesäß", price: "10 €", duration: "25 Min." },
        { name: "51. Damen Waxing - Nacken", price: "10 €", duration: "15 Min." },
        { name: "52. Damen Waxing - Augenbrauen", price: "7 €", duration: "10 Min." },
        { name: "53. Damen Waxing - Gesicht komplett", price: "20 €", duration: "15 Min." },
        { name: "54. Damen Waxing - Oberlippe", price: "7 €", duration: "15 Min." },
        { name: "55. Damen Waxing - Hals", price: "7 €", duration: "10 Min." },
        { name: "56. Damen Waxing - Kinn", price: "7 €", duration: "10 Min." },
        { name: "57. Damen Waxing - Ohren", price: "7 €", duration: "10 Min." },
        { name: "58. Damen Waxing - Rücken komplett", price: "40 €", duration: "30 Min." },
        { name: "59. Damen Waxing - Brust", price: "25 €", duration: "20 Min." },
        { name: "60. Damen Waxing - Bauch", price: "15 €", duration: "20 Min." },
        { name: "61. Damen Waxing - Brust & Bauch", price: "40 €", duration: "30 Min." },
        { name: "62. Damen Waxing - Hände", price: "7 €", duration: "15 Min." }
      ]
    },
    {
      name: "Herren Waxing",
      services: [
        { name: "63. Herren Waxing - Rücken & Schultern", price: "60 €", duration: "40 Min." },
        { name: "64. Herren Waxing - Rücken komplett", price: "40 €", duration: "40 Min." },
        { name: "65. Herren Waxing - Rücken unten", price: "15 €", duration: "40 Min." },
        { name: "66. Herren Waxing - Achseln", price: "15 €", duration: "20 Min." },
        { name: "67. Herren Waxing - Oberschenkel", price: "20 €", duration: "25 Min." },
        { name: "68. Herren Waxing - Unterschenkel", price: "25 €", duration: "25 Min." },
        { name: "69. Herren Waxing - Beine komplett", price: "40 €", duration: "40 Min." },
        { name: "70. Herren Waxing - Oberarme", price: "15 €", duration: "20 Min." },
        { name: "71. Herren Waxing - Unterarme", price: "15 €", duration: "20 Min." },
        { name: "72. Herren Waxing - Arme komplett", price: "30 €", duration: "40 Min." },
        { name: "73. Herren Waxing - Nacken", price: "10 €", duration: "15 Min." },
        { name: "74. Herren Waxing - Augenbrauen", price: "7 €", duration: "10 Min." },
        { name: "75. Herren Waxing - Hals", price: "7 €", duration: "10 Min." },
        { name: "76. Herren Waxing - Kinn", price: "7 €", duration: "10 Min." },
        { name: "77. Herren Waxing - Ohren", price: "7 €", duration: "10 Min." },
        { name: "78. Herren Waxing - Nase", price: "7 €", duration: "15 Min." },
        { name: "79. Herren Waxing - Hände", price: "7 €", duration: "15 Min." },
        { name: "80. Herren Waxing - Schultern", price: "25 €", duration: "25 Min." },
        { name: "81. Herren Waxing - Brust", price: "25 €", duration: "30 Min." },
        { name: "82. Herren Waxing - Bauch", price: "15 €", duration: "30 Min." },
        { name: "83. Herren Waxing - Pofalte", price: "10 €", duration: "20 Min." },
        { name: "84. Herren Waxing - Intim", price: "30 €", duration: "30 Min." }
      ]
    },
    {
      name: "Sugaring (Damen)",
      services: [
        { name: "85. Damen Sugaring - Hollywood", price: "30 €", duration: "30 Min." },
        { name: "86. Damen Sugaring - Intim", price: "30 €", duration: "30 Min." },
        { name: "87. Damen Sugaring - Bikini", price: "25 €", duration: "30 Min." },
        { name: "88. Damen Sugaring - Brazilian", price: "25 €", duration: "30 Min." },
        { name: "89. Damen Sugaring - Unterschenkel", price: "23 €", duration: "25 Min." },
        { name: "90. Damen Sugaring - Oberschenkel", price: "23 €", duration: "30 Min." },
        { name: "91. Damen Sugaring - Ober- & Unterschenkel", price: "40 €", duration: "40 Min." },
        { name: "92. Damen Sugaring - Beine komplett", price: "40 €", duration: "45 Min." },
        { name: "93. Damen Sugaring - Achseln", price: "15 €", duration: "15 Min." },
        { name: "94. Damen Sugaring - Unterarme", price: "15 €", duration: "25 Min." },
        { name: "95. Damen Sugaring - Oberarme", price: "15 €", duration: "25 Min." },
        { name: "96. Damen Sugaring - Arme komplett", price: "30 €", duration: "35 Min." },
        { name: "97. Damen Sugaring - Rücken unten", price: "15 €", duration: "40 Min." },
        { name: "98. Damen Sugaring - Bauch", price: "15 €", duration: "25 Min." },
        { name: "99. Damen Sugaring - Bikini, Achseln & Beine", price: "80 €", duration: "1 Std." },
        { name: "100. Damen Sugaring - Bikini & Beine", price: "65 €", duration: "1 Std." },
        { name: "101. Damen Sugaring - Bikini & Achseln", price: "40 €", duration: "40 Min." },
        { name: "102. Damen Sugaring - Bikini & Arme", price: "55 €", duration: "50 Min." },
        { name: "103. Damen Sugaring - Po", price: "10 €", duration: "20 Min." },
        { name: "104. Damen Sugaring - Pofalte", price: "10 €", duration: "20 Min." },
        { name: "105. Damen Sugaring - Gesäß", price: "10 €", duration: "20 Min." },
        { name: "106. Damen Sugaring - Hände", price: "7 €", duration: "15 Min." },
        { name: "107. Damen Sugaring - Füße", price: "7 €", duration: "15 Min." },
        { name: "108. Damen Sugaring - Zehen", price: "7 €", duration: "15 Min." },
        { name: "109. Damen Sugaring - Brust", price: "25 €", duration: "20 Min." },
        { name: "110. Damen Sugaring - Nacken", price: "10 €", duration: "10 Min." },
        { name: "111. Damen Sugaring - Augenbrauen", price: "7 €", duration: "10 Min." },
        { name: "112. Damen Sugaring - Gesicht komplett", price: "25 €", duration: "25 Min." },
        { name: "113. Damen Sugaring - Oberlippe & Kinn", price: "14 €", duration: "20 Min." },
        { name: "114. Damen Sugaring - Kinn", price: "7 €", duration: "10 Min." }
      ]
    },
    {
      name: "Gesichtsbehandlungen",
      services: [
        { name: "115. Gesichtsbehandlung - Basic Paket", price: "50 €", duration: "1 Std." },
        { name: "116. Gesichtsbehandlung - Deluxe Paket", price: "55 €", duration: "1 Std. 15 Min." }
      ]
    },
    {
      name: "Wimpernverlängerung",
      services: [
        { name: "117. Neuanlage 1:1 Technik", price: "50 €", duration: "1 Std." },
        { name: "118. Neuanlage 2D Technik", price: "55 €", duration: "1 Std." },
        { name: "119. Neuanlage 3D Technik", price: "60 €", duration: "1 Std." },
        { name: "120. Neuanlage 4D Technik", price: "70 €", duration: "1 Std." },
        { name: "121. Neuanlage 5D Technik", price: "70 €", duration: "1 Std." },
        { name: "122. Neuanlage 6D Technik", price: "75 €", duration: "1 Std." },
        { name: "123. Neuanlage 7D Technik", price: "80 €", duration: "1 Std." },
        { name: "124. Neuanlage 8D Technik", price: "80 €", duration: "1 Std." },
        { name: "125. Neuanlage 9D Technik", price: "80 €", duration: "1 Std." },
        { name: "126. Neuanlage 10D Technik", price: "80 €", duration: "1 Std." },
        { name: "127. Neuanlage Volumentechnik", price: "80 €", duration: "1 Std." },
        { name: "128. Auffüllen 1:1 Technik", price: "25 €", duration: "2 Wochen" },
        { name: "129. Auffüllen 2D Technik", price: "30 €", duration: "2 Wochen" },
        { name: "130. Auffüllen 3D Technik", price: "30 €", duration: "2 Wochen" },
        { name: "131. Auffüllen 4D Technik", price: "30 €", duration: "2 Wochen" },
        { name: "132. Auffüllen 5D Technik", price: "30 €", duration: "2 Wochen" },
        { name: "133. Auffüllen 6D Technik", price: "35 €", duration: "2 Wochen" },
        { name: "134. Auffüllen 7D Technik", price: "35 €", duration: "2 Wochen" },
        { name: "135. Auffüllen 8D Technik", price: "35 €", duration: "2 Wochen" },
        { name: "136. Auffüllen 9D Technik", price: "35 €", duration: "2 Wochen" },
        { name: "137. Auffüllen Volumentechnik", price: "35 €", duration: "2 Wochen" },
        { name: "138. Auffüllen 1:1 Technik", price: "35 €", duration: "3 Wochen" },
        { name: "139. Auffüllen 2D Technik", price: "40 €", duration: "3 Wochen" },
        { name: "140. Auffüllen 3D Technik", price: "40 €", duration: "3 Wochen" },
        { name: "141. Auffüllen 4D Technik", price: "40 €", duration: "3 Wochen" },
        { name: "142. Auffüllen 5D Technik", price: "40 €", duration: "3 Wochen" },
        { name: "143. Auffüllen 6D Technik", price: "40 €", duration: "3 Wochen" },
        { name: "144. Auffüllen 7D Technik", price: "45 €", duration: "3 Wochen" },
        { name: "145. Auffüllen 8D Technik", price: "40 €", duration: "3 Wochen" },
        { name: "146. Auffüllen 9D Technik", price: "45 €", duration: "3 Wochen" },
        { name: "147. Auffüllen Volumentechnik", price: "45 €", duration: "3 Wochen" },
        { name: "148. Auffüllen 1:1 Technik", price: "45 €", duration: "4 Wochen" },
        { name: "149. Auffüllen 2D Technik", price: "50 €", duration: "4 Wochen" },
        { name: "150. Auffüllen 3D Technik", price: "50 €", duration: "4 Wochen" },
        { name: "151. Auffüllen 4D Technik", price: "50 €", duration: "4 Wochen" },
        { name: "152. Auffüllen 5D Technik", price: "50 €", duration: "4 Wochen" },
        { name: "153. Auffüllen 6D Technik", price: "50 €", duration: "4 Wochen" },
        { name: "154. Auffüllen 7D Technik", price: "50 €", duration: "4 Wochen" },
        { name: "155. Auffüllen 8D Technik", price: "50 €", duration: "4 Wochen" },
        { name: "156. Auffüllen 9D Technik", price: "50 €", duration: "4 Wochen" },
        { name: "157. Auffüllen Volumentechnik", price: "50 €", duration: "4 Wochen" },
        { name: "158. Wimpernverlängerung entfernen", price: "15 €", duration: "30 Min." }
      ]
    },
    {
      name: "Massage",
      services: [
        { name: "159. Fußmassage", price: "15 € / 25 €", duration: "10 Min. / 20 Min." },
        { name: "160. Handmassage", price: "10 € / 20 €", duration: "10 Min. / 20 Min." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-pink-600 hover:text-pink-700">
            <ChevronLeft size={20} />
            <span>Zurück zur Startseite</span>
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-8">Preisliste</h1>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-pink-600 mb-6">{category.name}</h2>
              <div className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <div 
                    key={serviceIndex}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                  >
                    <div>
                      <span className="text-gray-800">{service.name}</span>
                      {service.duration && (
                        <span className="text-sm text-gray-500 ml-2">({service.duration})</span>
                      )}
                    </div>
                    <span className="font-medium text-gray-800">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PriceListPage;