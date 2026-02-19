import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // --- TES ÉTATS (LA MÉMOIRE DU SITE) ---
  const [nom, setNom] = useState("JUSTIN PRECIEUX");
  const [semaineHaute, setSemaineHaute] = useState(true);
  const [date, setDate] = useState(new Date());
  const [indexLangue, setIndexLangue] = useState(0);

  const salutations = [
    { texte: "Bonjour", langue: "Français" },
    { texte: "Hello", langue: "Anglais" },
    { texte: "Привет", langue: "Russe" },
    { texte: "Mboté", langue: "Lingala" },
    { texte: "Hola", langue: "Espagnol" },
    { texte: "你好", langue: "Chinois" },
   
  ];

  // --- LES EFFETS (LE TEMPS QUI PASSE) ---
  useEffect(() => {
    // Timer pour l'heure et les langues
    const intervalle = setInterval(() => {
      setDate(new Date());
      setIndexLangue((prev) => (prev + 1) % salutations.length);
    }, 3000);
    return () => clearInterval(intervalle);
  }, [salutations.length]);

  const jourActuel = date.getDay();

  return (
    <div className="week-selector">
  <button 
    className={semaineHaute ? "active" : ""} 
    onClick={() => setSemaineHaute(true)}
  >
    Верхняя неделя
  </button>
  <button 
    className={!semaineHaute ? "active" : ""} 
    onClick={() => setSemaineHaute(false)}
  >
    Нижняя неделя
  </button>
    <div className="container">
      <header className="futuristic-header">
       <div className="welcome-zone">
       {/* La 'key' est obligatoire pour relancer l'animation à chaque changement de langue */}
       <h1 key={indexLangue} className="typing-text">
       {salutations[indexLangue].texte} {nom}
       </h1>
       
      </div>
      </header>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Час</th>
              <th className={jourActuel === 1 ? "today-column" : ""}>Понедельник</th>
              <th className={jourActuel === 2 ? "today-column" : ""}>Вторник</th>
              <th className={jourActuel === 3 ? "today-column" : ""}>Среда</th>
              <th className={jourActuel === 4 ? "today-column" : ""}>Четверг</th>
              <th className={jourActuel === 5 ? "today-column" : ""}>Пятница</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>09:00-10:35</td>
              <td className="Иностранныйязык">
                {semaineHaute ? (
                 <>
                <strong>Иностранный язык</strong><br />
                <small>(Практические)</small><br />
                <em>Каф. ИЯКТ</em>
                </>
                ) : (
                  <>
                <strong>Иностранный язык</strong><br />
                <small>(Практические)</small><br />
                <em>Каф. ИЯКТ</em>
                </>
                )}
              </td>
              
              <td></td>

              <td className="Иностранныйязык">
                {semaineHaute ? (
                  <>
                
               <strong>Иностранный язык </strong><br />
                <small>(Практические)</small><br />
                <em>Каф. ИЯКТ</em>
                </>
                ) : (
                  <>
                <strong>Общая теория систем и</strong><br />
                <strong>системный анализ</strong><br />
                <small>(Лекционные)</small><br />
                <em>Белых П.В.</em><br />
                <em>Б-734</em>
                </>
                )}
              </td>
              <td>
                {semaineHaute ? (
                  <>
                </>
                ) : (
                  <>
                <strong>История России </strong><br />
                <small>(Практические)</small><br />
                <em>Болотова О.В.</em>
                <em>А-509</em>
                </>
                )}
              </td>
              <td>
                {semaineHaute ? (
                  <>
                </>
                ) : (
                  <>
                <strong>Физика </strong><br />
                <small>(Практические)</small><br />
                <em>Забенков И.В.</em>
                <em>Л-550</em>
                </>
                )}
              </td>
            </tr>
            <tr>
              <td>10:50-12:25</td>
              <td className="Физика">
                 {semaineHaute ? (
                  <>
                <strong>Физика</strong><br />
                <small>(Лекции)</small><br />
                <em>Гервиц Н.Е.</em><br />
                <em>Л-556</em>
                </>
                ) : (
                  <>
                <strong>Физика</strong><br />
                <small>(Лекции)</small><br />
                <em>Гервиц Н.Е.</em><br />
                <em>Л-556</em>
                </>
                )}
              </td>
              <td className="Физическаякультураиспорт"> 
                {semaineHaute ? (
                  <>
                <strong>Физическая культура и спорт</strong><br />
                <small>(Практические)</small><br />
                </>
                ) : (
                  <>
                <strong>Физическая культура и спорт</strong><br />
                <small>(Практические)</small><br />
               </>
                )}
              </td>
              <td className="Физика">
                {semaineHaute ? (
                  <>
                <strong>Физика</strong><br />
                <small>(Практические)</small><br />
                <em>Забенков И.В.</em><br />
                <em>Л-643</em>
                </>
                ) : (
                  <>
                <strong>Профессиональный</strong><br />
                <strong>инструментарий</strong><br />
                <strong>проектирования и</strong><br />
                <strong>разработки</strong><br />
                <strong>информационных систем</strong><br />
                <small>(Лабораторные)</small><br />
                <em>Домашов А.П.</em><br />
                <em>Л-529-УВЦ</em>
                </>
                )}
              </td>
              <td className="Математика">
                {semaineHaute ? (
                  <>
                <strong>Математика </strong><br />
                <small>(Лекционные)</small><br />
                <em>Казанцев А.В.</em><br />
                <em>Л-556</em>
                </>
                ) : (
                  <>
                <strong>Математика </strong><br />
                <small>(Лекционные)</small><br />
                <em>Казанцев А.В.</em><br />
                <em>Л-556</em>
                </>
                )}
              </td>
              <td className="Математика">
                {semaineHaute ? (
                  <>
                <strong>Математика</strong><br />
                <small>(Практические)</small><br />
                <em>Терентьев А.В.</em><br />
                <em>Л-634</em>
                </>
                ) : (
                  <>
                <strong>Математика</strong><br />
                <small>(Практические)</small><br />
                <em>Терентьев А.В.</em><br />
                <em>Л-634</em>
                </>
                )}
              </td>
              
            </tr>
            <tr>
              <td>12:40-14:15</td>
              <td className="Физика">
                {semaineHaute ? (
                  <>
                 
                <strong>Физика</strong><br />
                <small>(Лабораторные)</small><br />
                <em>Лабораторные</em><br />
                <em>Рычкова О.В.</em><br />
                <em>Л-551</em>
                </>
                ) : (
                  <>
                <strong>Физика</strong><br />
                <small>(Лекционные)</small><br />
                <em>Гервиц Н.Е.</em><br />
                <em>Л-556</em>
                </>
                )}
              </td>
              <td className="Персональнаяэффективность">
                {semaineHaute ? (
                  <>
                <strong>Персональная эффективность</strong><br />
                <small>(Практические)</small><br />
                <em>Бакирова Д.М.</em><br />
                <em>А-525</em>
                </>
                ) : (
                  <>
                <strong>Персональная эффективность</strong><br />
                <small>(Практические)</small><br />
                <em>Бакирова Д.М.</em><br />
                <em>А-524</em>
                </>
                )}
              </td>
              <td className="ИсторияРоссии">
                {semaineHaute ? (
                  <>
                <strong>История России</strong><br />
                <small>(Лекционные)</small><br />
                <em>Песьяков С.А.</em><br />
                <em>Л-550</em>
                </>
                ) : (
                  <>
                <strong>История России</strong><br />
                <small>(Лекционные)</small><br />
                <em>Песьяков С.А.</em><br />
                <em>Л-550</em>
                </>
                )}
              </td>
              <td className="Общаятеориясистеми">
                  {semaineHaute ? (
                    <>
                <strong>Общая теория систем и</strong><br />
                <strong>системный анализ</strong><br />
                <small>(Практические)</small><br />
                <em>Леонтьева Д.С.</em><br />
                <em>Л-531-УВЦ</em>
                    </>
                  ) : (
                    <>
                <strong>Общая теория систем и</strong><br />
                <strong>системный анализ</strong><br />
                <small>(Практические)</small><br />
                <em>Леонтьева Д.С.</em><br />
                <em>Л-531-УВЦ</em>
                    </>
                  )}
              </td>
              <td className="Математика"> 
                <strong>Математика</strong><br />
                <small>(Практические)</small><br />
                <em>Терентьев А.В.</em><br />
                <em>Л-634</em>
              </td>
            </tr>
            <tr>
              <td>14:30-16:05</td>
              <td></td>
              <td className="Профессиональный"> 
                <strong>Профессиональный </strong><br />
                <strong>инструментарий</strong><br /> 
                <strong>проектирования и</strong><br />
                <strong> разработки</strong><br />
                <strong>информационных систем</strong><br />
                <small>(Лекции)</small><br />
                <em>Григорьев S.V.</em><br />
                <em>Л-556</em>
              </td>
              <td className="Объектно-ориентированное">
                <strong>Объектно-ориентированное</strong><br />
                <strong>программирование</strong><br />
                <small>(Лабораторные)</small><br />
                <em>Куренкова Т.В.</em><br />
                <em>Л-812-УВЦ</em>
              </td>
              <td className="Объектно-ориентированное">
                <strong>Объектно-ориентированное</strong><br />
                <strong>программирование</strong><br />
                <small>(Лекционные)</small><br />
                <em>Куренкова Т.В.</em><br />
                <em>Л-518</em>
              </td>
              <td> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default App;