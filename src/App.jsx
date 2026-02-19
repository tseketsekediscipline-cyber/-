import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // --- TES ÉTATS (LA MÉMOIRE DU SITE) ---
  const [nom, setNom] = useState("JUSTIN");
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
    <div className="container">
     <header className="futuristic-header">
  <div className="welcome-zone">
    <div className="typing-container">
      <h1 key={indexLangue} className="typing-text">
        {salutations[indexLangue].texte} {nom}
      </h1>
    </div>
  </div>
</header>
  <div className="status-zone">
    <input 
      type="text" 
      value={nom} 
      onChange={(e) => setNom(e.target.value.toUpperCase())}
      className="modern-input"
    />
  </div>
</header>
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
      </div>
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
      {/* VERSION MOBILE COMPLETE */}
      <div className="mobile-schedule">
        <div className="mobile-day-section">
          <h3 className="mobile-day-title">
            {semaineHaute ? "Верхняя неделя" : "Нижняя неделя"}
          </h3>

          {/* LUNDI */}
          <div className="mobile-day-label">Понедельник</div>
          <div className="course-card Иностранныйязык">
            <div className="course-time">09:00 - 10:35</div>
            <div className="course-name">Иностранный язык</div>
            <div className="course-info">📍 Каф. ИЯКТ</div>
          </div>
          <div className="course-card Физика">
            <div className="course-time">10:50 - 12:25</div>
            <div className="course-name">Физика (Лекции)</div>
            <div className="course-info">📍 Л-556 | Гервиц Н.Е.</div>
          </div>
          <div className="course-card Физика">
            <div className="course-time">12:40 - 14:15</div>
            <div className="course-name">{semaineHaute ? "Физика (Лаб)" : "Физика (Лек)"}</div>
            <div className="course-info">📍 {semaineHaute ? "Л-551 | Рычкова О.В." : "Л-556 | Гервиц Н.Е."}</div>
          </div>

          {/* MARDI */}
          <div className="mobile-day-label">Вторник</div>
          <div className="course-card Физическаякультураиsport">
            <div className="course-time">10:50 - 12:25</div>
            <div className="course-name">Физкультура</div>
          </div>
          <div className="course-card Персональнаяэффективность">
            <div className="course-time">12:40 - 14:15</div>
            <div className="course-name">Персональная эффективность</div>
            <div className="course-info">📍 {semaineHaute ? "А-525" : "А-524"} | Бакирова Д.М.</div>
          </div>
          <div className="course-card Профессиональный">
            <div className="course-time">14:30 - 16:05</div>
            <div className="course-name">Проф. инструментарий (Лек)</div>
            <div className="course-info">📍 Л-556 | Григорьев S.V.</div>
          </div>

          {/* MERCREDI */}
          <div className="mobile-day-label">Среда</div>
          <div className="course-card Иностранныйязык">
            <div className="course-time">09:00 - 10:35</div>
            <div className="course-name">{semaineHaute ? "Иностранный язык" : "Общая теория систем (Лек)"}</div>
            <div className="course-info">📍 {semaineHaute ? "Каф. ИЯКТ" : "Б-734 | Белых П.В."}</div>
          </div>
          <div className="course-card Физика">
            <div className="course-time">10:50 - 12:25</div>
            <div className="course-name">{semaineHaute ? "Физика (Прак)" : "Проф. инструментарий (Лаб)"}</div>
            <div className="course-info">📍 {semaineHaute ? "Л-643 | Забенков И.В." : "Л-529-УВЦ | Домашов А.П."}</div>
          </div>

          {/* JEUDI */}
          <div className="mobile-day-label">Четверг</div>
          <div className="course-card Математика">
            <div className="course-time">10:50 - 12:25</div>
            <div className="course-name">Математика (Лек)</div>
            <div className="course-info">📍 Л-556 | Казанцев А.В.</div>
          </div>
          <div className="course-card Общаятеориясистеми">
            <div className="course-time">12:40 - 14:15</div>
            <div className="course-name">Общая теория систем (Прак)</div>
            <div className="course-info">📍 Л-531-УВЦ | Леонтьева Д.С.</div>
          </div>

          {/* VENDREDI */}
          <div className="mobile-day-label">Пятница</div>
          <div className="course-card Математика">
            <div className="course-time">10:50 - 12:25</div>
            <div className="course-name">Математика (Прак)</div>
            <div className="course-info">📍 Л-634 | Терентьев А.В.</div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
