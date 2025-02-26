import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

type ServiceCategory = {
  nameDE: string;
  nameEN: string;
  services: Array<{
    nameDE: string;
    nameEN: string;
    price: string;
    duration?: string;
  }>;
};

function PriceListPage() {
  const { language } = useLanguage();

  const categories: ServiceCategory[] = [
    {
      nameDE: "Maniküre & Pediküre",
      nameEN: "Manicure & Pedicure",
      services: [
        {
          nameDE: "1. Maniküre mit Gellack / Shellac",
          nameEN: "1. Manicure with Gel polish / Shellac",
          price: "25 €",
          duration: language === "de" ? "40 Min." : "40 min",
        },
        {
          nameDE: "2. Maniküre ohne Lack",
          nameEN: "2. Manicure without polish",
          price: "15 €",
          duration: language === "de" ? "15 Min." : "15 min",
        },
        {
          nameDE: "3. Maniküre mit Lack",
          nameEN: "3. Manicure with polish",
          price: "20 €",
          duration: language === "de" ? "25 Min." : "25 min",
        },
        {
          nameDE: "4. Pediküre ohne Lack",
          nameEN: "4. Pedicure without polish",
          price: "20 €",
          duration: language === "de" ? "30 Min." : "30 min",
        },
        {
          nameDE: "5. Pediküre mit Lack",
          nameEN: "5. Pedicure with polish",
          price: "30 €",
          duration: language === "de" ? "40 Min." : "40 min",
        },
        {
          nameDE: "6. Pediküre mit Gellack / Shellac",
          nameEN: "6. Pedicure with Gel polish / Shellac",
          price: "39 €",
          duration: language === "de" ? "1 Std." : "1 hr",
        },
        {
          nameDE: "7. Pediküre mit Gel/Pulvergel",
          nameEN: "7. Pedicure with Gel/Powder gel",
          price: "45 €",
          duration: language === "de" ? "1 Std. 15 Min." : "1 hr 15 min",
        },
        {
          nameDE: "8. Fußpeeling",
          nameEN: "8. Foot peeling",
          price: "5 €",
          duration: language === "de" ? "5 Min." : "5 min",
        },
        {
          nameDE: "9. Handpeeling",
          nameEN: "9. Hand peeling",
          price: "5 €",
          duration: language === "de" ? "10 Min." : "10 min",
        },
        {
          nameDE: "10. Fußnägel lackieren",
          nameEN: "10. Toenail polish",
          price: "15 €",
          duration: language === "de" ? "15 Min." : "15 min",
        },
        {
          nameDE: "11. Fußnägel mit Gellack / Shellac",
          nameEN: "11. Toenails with Gel polish / Shellac",
          price: "25 €",
          duration: language === "de" ? "30 Min." : "30 min",
        },
        {
          nameDE: "12. Nagelreparatur",
          nameEN: "12. Nail repair",
          price: "5 €",
          duration: language === "de" ? "10 Min." : "10 min",
        },
        {
          nameDE: "13. Fingernägel kürzen & feilen",
          nameEN: "13. Trim & file fingernails",
          price: "10 €",
          duration: language === "de" ? "20 Min." : "20 min",
        },
        {
          nameDE: "14. Nagel Design komplett",
          nameEN: "14. Complete nail design",
          price: "10 €",
          duration: language === "de" ? "15 Min." : "15 min",
        },
        {
          nameDE: "15. Strasssteine",
          nameEN: "15. Rhinestones",
          price: "0,50 €",
          duration: language === "de" ? "5 Min." : "5 min",
        },
        {
          nameDE: "16. Hand-Spa",
          nameEN: "16. Hand Spa",
          price: "15 €",
          duration: language === "de" ? "30 Min." : "30 min",
        },
      ],
    },
    {
      nameDE: "Acrylnägel / Gel & Pulver Gel",
      nameEN: "Acrylic Nails / Gel & Powder Gel",
      services: [
        {
          nameDE: "17. Neues Set mit Gel (ohne Farbe)",
          nameEN: "17. New set with gel (without color)",
          price: "30 €",
        },
        {
          nameDE: "18. Neues Set mit Gel (mit Farbe)",
          nameEN: "18. New set with gel (with color)",
          price: "33 €",
        },
        {
          nameDE: "19. Neues Set mit Pulver Gel (ohne Farbe)",
          nameEN: "19. New set with powder gel (without color)",
          price: "30 €",
        },
        {
          nameDE: "20. Neues Set mit Pulver Gel (mit Farbe)",
          nameEN: "20. New set with powder gel (with color)",
          price: "33 €",
        },
        {
          nameDE: "21. Neues Set mit Acryl (ohne Farbe)",
          nameEN: "21. New set with acrylic (without color)",
          price: "30 €",
        },
        {
          nameDE: "22. Neues Set mit Acryl (mit Farbe)",
          nameEN: "22. New set with acrylic (with color)",
          price: "33 €",
        },
        {
          nameDE: "23. Auffüllen mit Acryl",
          nameEN: "23. Refill with acrylic",
          price: "29 €",
        },
        {
          nameDE: "24. Auffüllen mit Gel",
          nameEN: "24. Refill with gel",
          price: "29 €",
        },
        {
          nameDE: "25. Auffüllen mit Pulver Gel",
          nameEN: "25. Refill with powder gel",
          price: "29 €",
        },
        { nameDE: "26. Entfernen", nameEN: "26. Removal", price: "10 €" },
        {
          nameDE: "27. Entfernen inkl. Maniküre",
          nameEN: "27. Removal including manicure",
          price: "20 €",
        },
        {
          nameDE: "28. Neumodellage - Baby-Boomer",
          nameEN: "28. New sculpting - Baby Boomer",
          price: "35 €",
        },
      ],
    },
    {
      nameDE: "Augenbrauen & Wimpern",
      nameEN: "Eyebrows & Eyelashes",
      services: [
        {
          nameDE: "29. Augenbrauen färben & zupfen, Wimpern färben",
          nameEN: "29. Eyebrow tinting & plucking, eyelash tinting",
          price: "20 €",
          duration: language === "de" ? "20 Min." : "20 min",
        },
        {
          nameDE: "30. Augenbrauen & Wimpern färben",
          nameEN: "30. Eyebrow & eyelash tinting",
          price: "15 €",
          duration: language === "de" ? "20 Min." : "20 min",
        },
        {
          nameDE: "31. Augenbrauen färben & zupfen",
          nameEN: "31. Eyebrow tinting & plucking",
          price: "15 €",
          duration: language === "de" ? "20 Min." : "20 min",
        },
        {
          nameDE: "32. Augenbrauen zupfen",
          nameEN: "32. Eyebrow plucking",
          price: "7 €",
          duration: language === "de" ? "15 Min." : "15 min",
        },
        {
          nameDE: "33. Augenbrauen färben",
          nameEN: "33. Eyebrow tinting",
          price: "8 €",
          duration: language === "de" ? "15 Min." : "15 min",
        },
        {
          nameDE: "34. Wimpern färben",
          nameEN: "34. Eyelash tinting",
          price: "10 €",
          duration: language === "de" ? "15 Min." : "15 min",
        },
        {
          nameDE: "35. Wimpernwelle",
          nameEN: "35. Eyelash lift",
          price: "30 €",
          duration: language === "de" ? "1 Std." : "1 hr",
        },
      ],
    },
    {
      nameDE: "Waxing (Damen & Herren)",
      nameEN: "Waxing (Ladies & Gentlemen)",
      services: [
        {
          nameDE: "36. Damen Waxing - Intim",
          nameEN: "36. Ladies Waxing - Intimate",
          price: "30 €",
          duration: language === "de" ? "25 Min." : "25 min",
        },
        {
          nameDE: "37. Damen Waxing - Brazilian",
          nameEN: "37. Ladies Waxing - Brazilian",
          price: "25 €",
          duration: language === "de" ? "25 Min." : "25 min",
        },
        {
          nameDE: "38. Damen Waxing - Hollywood",
          nameEN: "38. Ladies Waxing - Hollywood",
          price: "30 €",
          duration: language === "de" ? "25 Min." : "25 min",
        },
        {
          nameDE: "39. Damen Waxing - Bikini",
          nameEN: "39. Ladies Waxing - Bikini",
          price: "25 €",
          duration: language === "de" ? "25 Min." : "25 min",
        },
        {
          nameDE: "40. Damen Waxing - Bikini & Arme",
          nameEN: "40. Ladies Waxing - Bikini & Arms",
          price: "55 €",
          duration: language === "de" ? "50 Min." : "50 min",
        },
        {
          nameDE: "41. Damen Waxing - Bikini & Beine",
          nameEN: "41. Ladies Waxing - Bikini & Legs",
          price: "65 €",
          duration: language === "de" ? "1 Std." : "1 hr",
        },
        {
          nameDE: "42. Damen Waxing - Bikini & Achseln",
          nameEN: "42. Ladies Waxing - Bikini & Armpits",
          price: "40 €",
          duration: language === "de" ? "45 Min." : "45 min",
        },
        {
          nameDE: "43. Damen Waxing - Beine komplett",
          nameEN: "43. Ladies Waxing - Full Legs",
          price: "40 €",
          duration: language === "de" ? "45 Min." : "45 min",
        },
        {
          nameDE: "44. Damen Waxing - Achseln",
          nameEN: "44. Ladies Waxing - Armpits",
          price: "15 €",
          duration: language === "de" ? "20 Min." : "20 min",
        },
        {
          nameDE: "45. Damen Waxing - Unterarme",
          nameEN: "45. Ladies Waxing - Lower Arms",
          price: "15 €",
          duration: language === "de" ? "20 Min." : "20 min",
        },
        {
          nameDE: "46. Damen Waxing - Oberarme",
          nameEN: "46. Ladies Waxing - Upper Arms",
          price: "15 €",
          duration: language === "de" ? "20 Min." : "20 min",
        },
        {
          nameDE: "47. Damen Waxing - Arme komplett",
          nameEN: "47. Ladies Waxing - Full Arms",
          price: "30 €",
          duration: language === "de" ? "30 Min." : "30 min",
        },
        {
          nameDE: "48. Damen Waxing - Pofalte",
          nameEN: "48. Ladies Waxing - Buttock Crease",
          price: "10 €",
          duration: language === "de" ? "20 Min." : "20 min",
        },
        {
          nameDE: "49. Damen Waxing - Po",
          nameEN: "49. Ladies Waxing - Buttocks",
          price: "10 €",
          duration: language === "de" ? "25 Min." : "25 min",
        },
        {
          nameDE: "50. Damen Waxing - Gesäß",
          nameEN: "50. Ladies Waxing - Bottom",
          price: "10 €",
          duration: language === "de" ? "25 Min." : "25 min",
        },
        {
          nameDE: "51. Damen Waxing - Nacken",
          nameEN: "51. Ladies Waxing - Neck",
          price: "10 €",
          duration: language === "de" ? "15 Min." : "15 min",
        },
        {
          nameDE: "52. Damen Waxing - Augenbrauen",
          nameEN: "52. Ladies Waxing - Eyebrows",
          price: "7 €",
          duration: language === "de" ? "10 Min." : "10 min",
        },
        {
          nameDE: "53. Damen Waxing - Gesicht komplett",
          nameEN: "53. Ladies Waxing - Complete Face",
          price: "20 €",
          duration: language === "de" ? "15 Min." : "15 min",
        },
        {
          nameDE: "54. Damen Waxing - Oberlippe",
          nameEN: "54. Ladies Waxing - Upper Lip",
          price: "7 €",
          duration: language === "de" ? "15 Min." : "15 min",
        },
        {
          nameDE: "55. Damen Waxing - Hals",
          nameEN: "55. Ladies Waxing - Throat",
          price: "7 €",
          duration: language === "de" ? "10 Min." : "10 min",
        },
        {
          nameDE: "56. Damen Waxing - Kinn",
          nameEN: "56. Ladies Waxing - Chin",
          price: "7 €",
          duration: language === "de" ? "10 Min." : "10 min",
        },
        {
          nameDE: "57. Damen Waxing - Ohren",
          nameEN: "57. Ladies Waxing - Ears",
          price: "7 €",
          duration: language === "de" ? "10 Min." : "10 min",
        },
        {
          nameDE: "58. Damen Waxing - Rücken komplett",
          nameEN: "58. Ladies Waxing - Complete Back",
          price: "40 €",
          duration: language === "de" ? "30 Min." : "30 min",
        },
        {
          nameDE: "59. Damen Waxing - Brust",
          nameEN: "59. Ladies Waxing - Chest",
          price: "25 €",
          duration: language === "de" ? "20 Min." : "20 min",
        },
        {
          nameDE: "60. Damen Waxing - Bauch",
          nameEN: "60. Ladies Waxing - Stomach",
          price: "15 €",
          duration: language === "de" ? "20 Min." : "20 min",
        },
        {
          nameDE: "61. Damen Waxing - Brust & Bauch",
          nameEN: "61. Ladies Waxing - Chest & Stomach",
          price: "40 €",
          duration: language === "de" ? "30 Min." : "30 min",
        },
        {
          nameDE: "62. Damen Waxing - Hände",
          nameEN: "62. Ladies Waxing - Hands",
          price: "7 €",
          duration: language === "de" ? "15 Min." : "15 min",
        },
      ],
    },
    {
      nameDE: "Herren Waxing",
      nameEN: "Men's Waxing",
      services: [
        {
          nameDE: "63. Herren Waxing - Rücken & Schultern",
          nameEN: "63. Men's Waxing - Back & Shoulders",
          price: "60 €",
          duration: language === "de" ? "40 Min." : "40 min",
        },
        {
          nameDE: "64. Herren Waxing - Rücken komplett",
          nameEN: "64. Men's Waxing - Complete Back",
          price: "40 €",
          duration: language === "de" ? "40 Min." : "40 min",
        },
        {
          nameDE: "65. Herren Waxing - Rücken unten",
          nameEN: "65. Men's Waxing - Lower Back",
          price: "15 €",
          duration: language === "de" ? "40 Min." : "40 min",
        },
        {
          nameDE: "66. Herren Waxing - Achseln",
          nameEN: "66. Men's Waxing - Armpits",
          price: "15 €",
          duration: language === "de" ? "20 Min." : "20 min",
        },
        {
          nameDE: "67. Herren Waxing - Oberschenkel",
          nameEN: "67. Men's Waxing - Upper Thighs",
          price: "20 €",
          duration: language === "de" ? "25 Min." : "25 min",
        },
        {
          nameDE: "68. Herren Waxing - Unterschenkel",
          nameEN: "68. Men's Waxing - Lower Legs",
          price: "25 €",
          duration: language === "de" ? "25 Min." : "25 min",
        },
        {
          nameDE: "69. Herren Waxing - Beine komplett",
          nameEN: "69. Men's Waxing - Full Legs",
          price: "40 €",
          duration: language === "de" ? "40 Min." : "40 min",
        },
        {
          nameDE: "70. Herren Waxing - Oberarme",
          nameEN: "70. Men's Waxing - Upper Arms",
          price: "15 €",
          duration: language === "de" ? "20 Min." : "20 min",
        },
        {
          nameDE: "71. Herren Waxing - Unterarme",
          nameEN: "71. Men's Waxing - Lower Arms",
          price: "15 €",
          duration: language === "de" ? "20 Min." : "20 min",
        },
        {
          nameDE: "72. Herren Waxing - Arme komplett",
          nameEN: "72. Men's Waxing - Full Arms",
          price: "30 €",
          duration: language === "de" ? "40 Min." : "40 min",
        },
        {
          nameDE: "73. Herren Waxing - Nacken",
          nameEN: "73. Men's Waxing - Neck",
          price: "10 €",
          duration: language === "de" ? "15 Min." : "15 min",
        },
        {
          nameDE: "74. Herren Waxing - Augenbrauen",
          nameEN: "74. Men's Waxing - Eyebrows",
          price: "7 €",
          duration: language === "de" ? "10 Min." : "10 min",
        },
        {
          nameDE: "75. Herren Waxing - Hals",
          nameEN: "75. Men's Waxing - Throat",
          price: "7 €",
          duration: language === "de" ? "10 Min." : "10 min",
        },
        {
          nameDE: "76. Herren Waxing - Kinn",
          nameEN: "76. Men's Waxing - Chin",
          price: "7 €",
          duration: language === "de" ? "10 Min." : "10 min",
        },
        {
          nameDE: "77. Herren Waxing - Ohren",
          nameEN: "77. Men's Waxing - Ears",
          price: "7 €",
          duration: language === "de" ? "10 Min." : "10 min",
        },
        {
          nameDE: "78. Herren Waxing - Nase",
          nameEN: "78. Men's Waxing - Nose",
          price: "7 €",
          duration: language === "de" ? "15 Min." : "15 min",
        },
        {
          nameDE: "79. Herren Waxing - Hände",
          nameEN: "79. Men's Waxing - Hands",
          price: "7 €",
          duration: language === "de" ? "15 Min." : "15 min",
        },
        {
          nameDE: "80. Herren Waxing - Schultern",
          nameEN: "80. Men's Waxing - Shoulders",
          price: "25 €",
          duration: language === "de" ? "25 Min." : "25 min",
        },
        {
          nameDE: "81. Herren Waxing - Brust",
          nameEN: "81. Men's Waxing - Chest",
          price: "25 €",
          duration: language === "de" ? "30 Min." : "30 min",
        },
        {
          nameDE: "82. Herren Waxing - Bauch",
          nameEN: "82. Men's Waxing - Stomach",
          price: "15 €",
          duration: language === "de" ? "30 Min." : "30 min",
        },
        {
          nameDE: "83. Herren Waxing - Pofalte",
          nameEN: "83. Men's Waxing - Buttock Crease",
          price: "10 €",
          duration: language === "de" ? "20 Min." : "20 min",
        },
        {
          nameDE: "84. Herren Waxing - Intim",
          nameEN: "84. Men's Waxing - Intimate",
          price: "30 €",
          duration: language === "de" ? "30 Min." : "30 min",
        },
      ],
    },
    {
      nameDE: "Sugaring (Damen)",
      nameEN: "Sugaring (Ladies)",
      services: [
        {
          nameDE: "85. Damen Sugaring - Hollywood",
          nameEN: "85. Ladies Sugaring - Hollywood",
          price: "30 €",
          duration: language === "de" ? "30 Min." : "30 min",
        },
        {
          nameDE: "86. Damen Sugaring - Intim",
          nameEN: "86. Ladies Sugaring - Intimate",
          price: "30 €",
          duration: language === "de" ? "30 Min." : "30 min",
        },
        {
          nameDE: "87. Damen Sugaring - Bikini",
          nameEN: "87. Ladies Sugaring - Bikini",
          price: "25 €",
          duration: language === "de" ? "30 Min." : "30 min",
        },
        {
          nameDE: "88. Damen Sugaring - Brazilian",
          nameEN: "88. Ladies Sugaring - Brazilian",
          price: "25 €",
          duration: language === "de" ? "30 Min." : "30 min",
        },
        {
          nameDE: "89. Damen Sugaring - Unterschenkel",
          nameEN: "89. Ladies Sugaring - Lower Legs",
          price: "23 €",
          duration: language === "de" ? "25 Min." : "25 min",
        },
        {
          nameDE: "90. Damen Sugaring - Oberschenkel",
          nameEN: "90. Ladies Sugaring - Upper Thighs",
          price: "23 €",
          duration: language === "de" ? "30 Min." : "30 min",
        },
        {
          nameDE: "91. Damen Sugaring - Ober- & Unterschenkel",
          nameEN: "91. Ladies Sugaring - Upper & Lower Legs",
          price: "40 €",
          duration: language === "de" ? "40 Min." : "40 min",
        },
        {
          nameDE: "92. Damen Sugaring - Beine komplett",
          nameEN: "92. Ladies Sugaring - Full Legs",
          price: "40 €",
          duration: language === "de" ? "45 Min." : "45 min",
        },
        {
          nameDE: "93. Damen Sugaring - Achseln",
          nameEN: "93. Ladies Sugaring - Armpits",
          price: "15 €",
          duration: language === "de" ? "15 Min." : "15 min",
        },
        {
          nameDE: "94. Damen Sugaring - Unterarme",
          nameEN: "94. Ladies Sugaring - Lower Arms",
          price: "15 €",
          duration: language === "de" ? "25 Min." : "25 min",
        },
        {
          nameDE: "95. Damen Sugaring - Oberarme",
          nameEN: "95. Ladies Sugaring - Upper Arms",
          price: "15 €",
          duration: language === "de" ? "25 Min." : "25 min",
        },
        {
          nameDE: "96. Damen Sugaring - Arme komplett",
          nameEN: "96. Ladies Sugaring - Full Arms",
          price: "30 €",
          duration: language === "de" ? "35 Min." : "35 min",
        },
        {
          nameDE: "97. Damen Sugaring - Rücken unten",
          nameEN: "97. Ladies Sugaring - Lower Back",
          price: "15 €",
          duration: language === "de" ? "40 Min." : "40 min",
        },
        {
          nameDE: "98. Damen Sugaring - Bauch",
          nameEN: "98. Ladies Sugaring - Stomach",
          price: "15 €",
          duration: language === "de" ? "25 Min." : "25 min",
        },
        {
          nameDE: "99. Damen Sugaring - Bikini, Achseln & Beine",
          nameEN: "99. Ladies Sugaring - Bikini, Armpits & Legs",
          price: "80 €",
          duration: language === "de" ? "1 Std." : "1 hr",
        },
        {
          nameDE: "100. Damen Sugaring - Bikini & Beine",
          nameEN: "100. Ladies Sugaring - Bikini & Legs",
          price: "65 €",
          duration: language === "de" ? "1 Std." : "1 hr",
        },
        {
          nameDE: "101. Damen Sugaring - Bikini & Achseln",
          nameEN: "101. Ladies Sugaring - Bikini & Armpits",
          price: "40 €",
          duration: language === "de" ? "40 Min." : "40 min",
        },
        {
          nameDE: "102. Damen Sugaring - Bikini & Arme",
          nameEN: "102. Ladies Sugaring - Bikini & Arms",
          price: "55 €",
          duration: language === "de" ? "50 Min." : "50 min",
        },
        {
          nameDE: "103. Damen Sugaring - Po",
          nameEN: "103. Ladies Sugaring - Buttocks",
          price: "10 €",
          duration: language === "de" ? "20 Min." : "20 min",
        },
        {
          nameDE: "104. Damen Sugaring - Pofalte",
          nameEN: "104. Ladies Sugaring - Buttock Crease",
          price: "10 €",
          duration: language === "de" ? "20 Min." : "20 min",
        },
        {
          nameDE: "105. Damen Sugaring - Gesäß",
          nameEN: "105. Ladies Sugaring - Bottom",
          price: "10 €",
          duration: language === "de" ? "20 Min." : "20 min",
        },
        {
          nameDE: "106. Damen Sugaring - Hände",
          nameEN: "106. Ladies Sugaring - Hands",
          price: "7 €",
          duration: language === "de" ? "15 Min." : "15 min",
        },
        {
          nameDE: "107. Damen Sugaring - Füße",
          nameEN: "107. Ladies Sugaring - Feet",
          price: "7 €",
          duration: language === "de" ? "15 Min." : "15 min",
        },
        {
          nameDE: "108. Damen Sugaring - Zehen",
          nameEN: "108. Ladies Sugaring - Toes",
          price: "7 €",
          duration: language === "de" ? "15 Min." : "15 min",
        },
        {
          nameDE: "109. Damen Sugaring - Brust",
          nameEN: "109. Ladies Sugaring - Chest",
          price: "25 €",
          duration: language === "de" ? "20 Min." : "20 min",
        },
        {
          nameDE: "110. Damen Sugaring - Nacken",
          nameEN: "110. Ladies Sugaring - Neck",
          price: "10 €",
          duration: language === "de" ? "10 Min." : "10 min",
        },
        {
          nameDE: "111. Damen Sugaring - Augenbrauen",
          nameEN: "111. Ladies Sugaring - Eyebrows",
          price: "7 €",
          duration: language === "de" ? "10 Min." : "10 min",
        },
        {
          nameDE: "112. Damen Sugaring - Gesicht komplett",
          nameEN: "112. Ladies Sugaring - Complete Face",
          price: "25 €",
          duration: language === "de" ? "25 Min." : "25 min",
        },
        {
          nameDE: "113. Damen Sugaring - Oberlippe & Kinn",
          nameEN: "113. Ladies Sugaring - Upper Lip & Chin",
          price: "14 €",
          duration: language === "de" ? "20 Min." : "20 min",
        },
        {
          nameDE: "114. Damen Sugaring - Kinn",
          nameEN: "114. Ladies Sugaring - Chin",
          price: "7 €",
          duration: language === "de" ? "10 Min." : "10 min",
        },
      ],
    },
    {
      nameDE: "Gesichtsbehandlungen",
      nameEN: "Facial Treatments",
      services: [
        {
          nameDE: "115. Gesichtsbehandlung - Basic Paket",
          nameEN: "115. Facial Treatment - Basic Package",
          price: "50 €",
          duration: language === "de" ? "1 Std." : "1 hr",
        },
        {
          nameDE: "116. Gesichtsbehandlung - Deluxe Paket",
          nameEN: "116. Facial Treatment - Deluxe Package",
          price: "55 €",
          duration: language === "de" ? "1 Std. 15 Min." : "1 hr 15 min",
        },
      ],
    },
    {
      nameDE: "Wimpernverlängerung",
      nameEN: "Eyelash Extensions",
      services: [
        {
          nameDE: "117. Neuanlage 1:1 Technik",
          nameEN: "117. New Set 1:1 Technique",
          price: "50 €",
          duration: language === "de" ? "1 Std." : "1 hr",
        },
        {
          nameDE: "118. Neuanlage 2D Technik",
          nameEN: "118. New Set 2D Technique",
          price: "55 €",
          duration: language === "de" ? "1 Std." : "1 hr",
        },
        {
          nameDE: "119. Neuanlage 3D Technik",
          nameEN: "119. New Set 3D Technique",
          price: "60 €",
          duration: language === "de" ? "1 Std." : "1 hr",
        },
        {
          nameDE: "120. Neuanlage 4D Technik",
          nameEN: "120. New Set 4D Technique",
          price: "70 €",
          duration: language === "de" ? "1 Std." : "1 hr",
        },
        {
          nameDE: "121. Neuanlage 5D Technik",
          nameEN: "121. New Set 5D Technique",
          price: "70 €",
          duration: language === "de" ? "1 Std." : "1 hr",
        },
        {
          nameDE: "122. Neuanlage 6D Technik",
          nameEN: "122. New Set 6D Technique",
          price: "75 €",
          duration: language === "de" ? "1 Std." : "1 hr",
        },
        {
          nameDE: "123. Neuanlage 7D Technik",
          nameEN: "123. New Set 7D Technique",
          price: "80 €",
          duration: language === "de" ? "1 Std." : "1 hr",
        },
        {
          nameDE: "124. Neuanlage 8D Technik",
          nameEN: "124. New Set 8D Technique",
          price: "80 €",
          duration: language === "de" ? "1 Std." : "1 hr",
        },
        {
          nameDE: "125. Neuanlage 9D Technik",
          nameEN: "125. New Set 9D Technique",
          price: "80 €",
          duration: language === "de" ? "1 Std." : "1 hr",
        },
        {
          nameDE: "126. Neuanlage 10D Technik",
          nameEN: "126. New Set 10D Technique",
          price: "80 €",
          duration: language === "de" ? "1 Std." : "1 hr",
        },
        {
          nameDE: "127. Neuanlage Volumentechnik",
          nameEN: "127. New Set Volume Technique",
          price: "80 €",
          duration: language === "de" ? "1 Std." : "1 hr",
        },
        {
          nameDE: "128. Auffüllen 1:1 Technik",
          nameEN: "128. Refill 1:1 Technique",
          price: "25 €",
          duration: language === "de" ? "2 Wochen" : "2 Weeks",
        },
        {
          nameDE: "129. Auffüllen 2D Technik",
          nameEN: "129. Refill 2D Technique",
          price: "30 €",
          duration: language === "de" ? "2 Wochen" : "2 Weeks",
        },
        {
          nameDE: "130. Auffüllen 3D Technik",
          nameEN: "130. Refill 3D Technique",
          price: "30 €",
          duration: language === "de" ? "2 Wochen" : "2 Weeks",
        },
        {
          nameDE: "131. Auffüllen 4D Technik",
          nameEN: "131. Refill 4D Technique",
          price: "30 €",
          duration: language === "de" ? "2 Wochen" : "2 Weeks",
        },
        {
          nameDE: "132. Auffüllen 5D Technik",
          nameEN: "132. Refill 5D Technique",
          price: "30 €",
          duration: language === "de" ? "2 Wochen" : "2 Weeks",
        },
        {
          nameDE: "133. Auffüllen 6D Technik",
          nameEN: "133. Refill 6D Technique",
          price: "35 €",
          duration: language === "de" ? "2 Wochen" : "2 Weeks",
        },
        {
          nameDE: "134. Auffüllen 7D Technik",
          nameEN: "134. Refill 7D Technique",
          price: "35 €",
          duration: language === "de" ? "2 Wochen" : "2 Weeks",
        },
        {
          nameDE: "135. Auffüllen 8D Technik",
          nameEN: "135. Refill 8D Technique",
          price: "35 €",
          duration: language === "de" ? "2 Wochen" : "2 Weeks",
        },
        {
          nameDE: "136. Auffüllen 9D Technik",
          nameEN: "136. Refill 9D Technique",
          price: "35 €",
          duration: language === "de" ? "2 Wochen" : "2 Weeks",
        },
        {
          nameDE: "137. Auffüllen Volumentechnik",
          nameEN: "137. Refill Volume Technique",
          price: "35 €",
          duration: language === "de" ? "2 Wochen" : "2 Weeks",
        },
        {
          nameDE: "138. Auffüllen 1:1 Technik",
          nameEN: "138. Refill 1:1 Technique",
          price: "35 €",
          duration: language === "de" ? "3 Wochen" : "3 Weeks",
        },
        {
          nameDE: "139. Auffüllen 2D Technik",
          nameEN: "139. Refill 2D Technique",
          price: "40 €",
          duration: language === "de" ? "3 Wochen" : "3 Weeks",
        },
        {
          nameDE: "140. Auffüllen 3D Technik",
          nameEN: "140. Refill 3D Technique",
          price: "40 €",
          duration: language === "de" ? "3 Wochen" : "3 Weeks",
        },
        {
          nameDE: "141. Auffüllen 4D Technik",
          nameEN: "141. Refill 4D Technique",
          price: "40 €",
          duration: language === "de" ? "3 Wochen" : "3 Weeks",
        },
        {
          nameDE: "142. Auffüllen 5D Technik",
          nameEN: "142. Refill 5D Technique",
          price: "40 €",
          duration: language === "de" ? "3 Wochen" : "3 Weeks",
        },
        {
          nameDE: "143. Auffüllen 6D Technik",
          nameEN: "143. Refill 6D Technique",
          price: "40 €",
          duration: language === "de" ? "3 Wochen" : "3 Weeks",
        },
        {
          nameDE: "144. Auffüllen 7D Technik",
          nameEN: "144. Refill 7D Technique",
          price: "45 €",
          duration: language === "de" ? "3 Wochen" : "3 Weeks",
        },
        {
          nameDE: "145. Auffüllen 8D Technik",
          nameEN: "145. Refill 8D Technique",
          price: "40 €",
          duration: language === "de" ? "3 Wochen" : "3 Weeks",
        },
        {
          nameDE: "146. Auffüllen 9D Technik",
          nameEN: "146. Refill 9D Technique",
          price: "45 €",
          duration: language === "de" ? "3 Wochen" : "3 Weeks",
        },
        {
          nameDE: "147. Auffüllen Volumentechnik",
          nameEN: "147. Refill Volume Technique",
          price: "45 €",
          duration: language === "de" ? "3 Wochen" : "3 Weeks",
        },
        {
          nameDE: "148. Auffüllen 1:1 Technik",
          nameEN: "148. Refill 1:1 Technique",
          price: "45 €",
          duration: language === "de" ? "4 Wochen" : "4 Weeks",
        },
        {
          nameDE: "149. Auffüllen 2D Technik",
          nameEN: "149. Refill 2D Technique",
          price: "50 €",
          duration: language === "de" ? "4 Wochen" : "4 Weeks",
        },
        {
          nameDE: "150. Auffüllen 3D Technik",
          nameEN: "150. Refill 3D Technique",
          price: "50 €",
          duration: language === "de" ? "4 Wochen" : "4 Weeks",
        },
        {
          nameDE: "151. Auffüllen 4D Technik",
          nameEN: "151. Refill 4D Technique",
          price: "50 €",
          duration: language === "de" ? "4 Wochen" : "4 Weeks",
        },
        {
          nameDE: "152. Auffüllen 5D Technik",
          nameEN: "152. Refill 5D Technique",
          price: "50 €",
          duration: language === "de" ? "4 Wochen" : "4 Weeks",
        },
        {
          nameDE: "153. Auffüllen 6D Technik",
          nameEN: "153. Refill 6D Technique",
          price: "50 €",
          duration: language === "de" ? "4 Wochen" : "4 Weeks",
        },
        {
          nameDE: "154. Auffüllen 7D Technik",
          nameEN: "154. Refill 7D Technique",
          price: "50 €",
          duration: language === "de" ? "4 Wochen" : "4 Weeks",
        },
        {
          nameDE: "155. Auffüllen 8D Technik",
          nameEN: "155. Refill 8D Technique",
          price: "50 €",
          duration: language === "de" ? "4 Wochen" : "4 Weeks",
        },
        {
          nameDE: "156. Auffüllen 9D Technik",
          nameEN: "156. Refill 9D Technique",
          price: "50 €",
          duration: language === "de" ? "4 Wochen" : "4 Weeks",
        },
        {
          nameDE: "157. Auffüllen Volumentechnik",
          nameEN: "157. Refill Volume Technique",
          price: "50 €",
          duration: language === "de" ? "4 Wochen" : "4 Weeks",
        },
        {
          nameDE: "158. Wimpernverlängerung entfernen",
          nameEN: "158. Remove Eyelash Extensions",
          price: "15 €",
          duration: language === "de" ? "30 Min." : "30 Min.",
        },
      ],
    },
    {
      nameDE: "Massage",
      nameEN: "Massage",
      services: [
        {
          nameDE: "159. Fußmassage",
          nameEN: "159. Foot Massage",
          price: "15 € / 25 €",
          duration: "10 Min. / 20 Min.",
        },
        {
          nameDE: "160. Handmassage",
          nameEN: "160. Hand Massage",
          price: "10 € / 20 €",
          duration: "10 Min. / 20 Min.",
        },
      ],
    },
  ];

  // For demonstration purposes only, I've shortened the lists above
  // In a real application, you'd translate all services

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-pink-600 hover:text-pink-700"
          >
            <ChevronLeft size={20} />
            <span>
              {language === "de" ? "Zurück zur Startseite" : "Back to Home"}
            </span>
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          {language === "de" ? "Preisliste" : "Price List"}
        </h1>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-pink-600 mb-6">
                {language === "de" ? category.nameDE : category.nameEN}
              </h2>
              <div className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                  >
                    <div>
                      <span className="text-gray-800">
                        {language === "de" ? service.nameDE : service.nameEN}
                      </span>
                      {service.duration && (
                        <span className="text-sm text-gray-500 ml-2">
                          ({service.duration})
                        </span>
                      )}
                    </div>
                    <span className="font-medium text-gray-800">
                      {service.price}
                    </span>
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
