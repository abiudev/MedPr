import Header from "./components/Header.jsx";
import { useState } from "react";
import Searchbar from "./components/Searchbar.jsx";
import Data from "./components/SymptomSelector.jsx";
import { Signs } from "./components/Symptoms.jsx";
import { diseaseData } from "./components/Diseases.jsx";
import Results from "./components/Results.jsx";

export default function App() {
  const [visibleSections, setVisibleSections] = useState({});
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [likelyDisease, setLikelyDisease] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  function handleClick(title) {
    setVisibleSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  }

  const handleSymptomChange = (symptom, isSelected) => {
    setSelectedSymptoms((prevSymptoms) =>
      isSelected
        ? [...prevSymptoms, symptom]
        : prevSymptoms.filter((s) => s !== symptom)
    );
  };

  const determineDisease = () => {
    let bestMatch = "";
    let bestMatchCount = 0;

    for (const [disease, symptoms] of Object.entries(diseaseData)) {
      const matchCount = symptoms.filter((symptom) =>
        selectedSymptoms.includes(symptom)
      ).length;

      if (matchCount > bestMatchCount) {
        bestMatch = disease;
        bestMatchCount = matchCount;
      }
    }

    setLikelyDisease(bestMatch || "No likely disease found");
    setIsModalOpen(true); // Open the modal when the disease is determined
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      <Header />
      <Searchbar />

      <div>
        {Signs.map(({ title, symptoms }) => (
          <Data
            key={title}
            title={title}
            handleClick={() => handleClick(title)}
            visible={visibleSections[title]}
          >
            {symptoms.map((symptom) => (
              <div key={symptom.value}>
                <label>
                  <input
                    type="checkbox"
                    value={symptom.value}
                    name={symptom.value}
                    onChange={(e) =>
                      handleSymptomChange(symptom.value, e.target.checked)
                    }
                  />
                  {symptom.label}
                </label>
              </div>
            ))}
          </Data>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={determineDisease}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Find Likely Disease
        </button>
      </div>

      <Results
        isOpen={isModalOpen}
        onClose={closeModal}
        likelyDisease={likelyDisease}
      />
    </>
  );
}
}
