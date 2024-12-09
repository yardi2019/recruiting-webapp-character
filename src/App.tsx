import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts'
import Classes from './components/Classes';
import { Attributes, Class } from './types';
import AttributesSection from './components/AttributesSection';
import './styles.css'
import SkillsList from './components/SkillsList';



const createInitialAttributes = (): Record<string, number> => {
  const attributes: Record<string, number> = ATTRIBUTE_LIST.reduce((acc, item) => {
    acc[item] = 0;
    return acc;
  }, {} as Record<string, number>);
  console.log("attributes", attributes);
  return attributes
  
}

const App: React.FC = () => {
  const [attribute, setAttribute] = useState<Record<string, number>>(createInitialAttributes);
  const [classes, setClasses] = useState<Record<Class, Attributes>>(CLASS_LIST)
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  // const [skills, setSKills] = useState<any>(SKILL_LIST)
  
  const incrementValue = (key: string) => {
    setAttribute((prev) => ({
      ...prev,
      [key]: prev[key] + 1,
    }));
  };

  const decrementValue = (key: string) => {
    setAttribute((prev) => ({
      ...prev,
      [key]: prev[key] - 1 < 0 ? 0 : prev[key] - 1, //Cannot -ve decrement
    }));
  };

  //Class selection
  const handleClassClick = (className: string) => {
    setSelectedClass((prev) => (prev === className ? null : className));
  };

  //Check for matching class attributes
  const isMatchingClass = (classAttributes: Attributes): boolean => {
    return Object.entries(classAttributes).every(
      ([key, value]) => attribute[key as keyof Attributes] >= value
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <div>
          <AttributesSection
            attributes = { attribute }
            incrementValue={incrementValue}
            decrementValue={decrementValue}
          />
          <Classes
            classes = { classes }
            selectedClass = { selectedClass }
            handleClassClick = {handleClassClick}
            isMatchingClass = {isMatchingClass}
          />
          {/* <SkillsList skillsList={skills}          /> */}
        </div>
      </section>
    </div>
  );
}

export default App;
