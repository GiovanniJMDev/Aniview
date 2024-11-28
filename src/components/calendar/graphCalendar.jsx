import React, { useState, useEffect } from "react";

const GraphCalendar = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const [year, setYear] = useState(new Date().getFullYear());
  const [contributionData, setContributionData] = useState([]);

  // Generar datos de muestra de contribución (niveles de intensidad de 0 a 4)
  const generateSampleData = (year) => {
    const data = [];
    const totalDays = isLeapYear(year) ? 366 : 365;

    // Obtener el primer día del año (0 = Domingo, 1 = Lunes, etc)
    const firstDay = new Date(year, 0, 1).getDay();
    // Ajustar para que la semana empiece en lunes (0 = Lunes)
    const startDay = firstDay === 0 ? 6 : firstDay - 1;

    // Inicializar primera semana con días nulos hasta el primer día del año
    let currentWeek = Array(startDay).fill(null);
    let dayCount = 1;

    // Mientras no hayamos procesado todos los días del año
    while (dayCount <= totalDays) {
      // Agregar el día actual a la semana en curso
      currentWeek.push(Math.floor(Math.random() * 5));
      dayCount++;

      // Si la semana está completa o hemos llegado al último día
      if (currentWeek.length === 7 || dayCount > totalDays) {
        // Rellenar con nulos si es la última semana y no está completa
        while (currentWeek.length < 7) {
          currentWeek.push(null);
        }
        data.push(currentWeek);
        currentWeek = [];
      }
    }

    return data;
  };

  // Función para verificar si un año es bisiesto
  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  // Función para manejar el cambio del año seleccionado
  const handleYearChange = (event) => {
    const selectedYear = parseInt(event.target.value, 10);
    setYear(selectedYear);
  };

  // Actualizar los datos de contribución cuando el año cambia
  useEffect(() => {
    setContributionData(generateSampleData(year));
  }, [year]);

  // Función para obtener la clase de fondo según el nivel de contribución
  const getBackgroundClass = (day) => {
    switch (day) {
      case 1:
        return "bg-dark-purple";
      case 2:
        return "bg-light-purple";
      case 3:
        return "bg-emerald-500";
      case 4:
        return "bg-emerald-300";
      default:
        return "bg-gray-800";
    }
  };

  // Función para obtener la fecha en formato DD/MM/YYYY
  const getDateFromIndex = (weekIndex, dayIndex) => {
    const date = new Date(year, 0, 1);
    const dayOffset = weekIndex * 7 + dayIndex;
    const firstDayOfYear = date.getDay();
    const adjustedOffset =
      dayOffset - (firstDayOfYear === 0 ? 6 : firstDayOfYear - 1);

    date.setDate(date.getDate() + adjustedOffset);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");

    return `${day}/${month}/${year}`;
  };

  // Función para calcular la columna inicial de cada mes
  const getMonthStartColumn = (monthIndex) => {
    // Obtener el primer día del mes
    const date = new Date(year, monthIndex, 1);
    let currentDate = new Date(year, 0, 1);
    let weekCount = 0;
    
    // Contar las semanas hasta llegar al mes
    while (currentDate < date) {
      if (currentDate.getDay() === 1) { // Si es lunes, nueva semana
        weekCount++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    // Si el primer día del mes es lunes, asegurarnos de contar esa semana
    if (date.getDay() === 1) {
      weekCount++;
    }

    // Restar 1 para ajustar la columna
    weekCount = weekCount - 1;

    console.log(`Mes: ${months[monthIndex]}, Semana: ${weekCount}, Día: ${days[date.getDay() === 0 ? 6 : date.getDay() - 1]}`);
    return weekCount;
  };

  return (
    <div className="h-full w-full overflow-x-auto flex flex-col">
      <div className="flex justify-between items-center px-4 py-2 sticky top-0 bg-white z-10 shadow-md">
        <h3 className="text-xl font-bold text-black">My Watching List</h3>
        <label htmlFor="year-select" className="text-xs">
          Select Year:
        </label>
        <select
          id="year-select"
          value={year}
          onChange={handleYearChange}
          className="border border-gray-400 text-gray-700 outline-none px-1 rounded"
        >
          {Array.from({ length: 5 }, (_, i) => 2020 + i).map((yearOption) => (
            <option key={yearOption} value={yearOption}>
              {yearOption}
            </option>
          ))}
        </select>
      </div>
      <div className="max-w-5xl rounded-lg flex-grow w-full overflow-auto text-sm text-gray-700 flex flex-col justify-center">
        <div className="flex gap-2 px-4 w-fit">
          <div className="grid gap-2 pt-6 text-xs">
            {days.map((day) => (
              <div key={day} className="h-4 text-right">
                {day}
              </div>
            ))}
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-[repeat(53,1fr)] gap-[3px]">
              <div className="col-span-full h-6 grid grid-cols-[repeat(53,1fr)] text-center text-xs">
                {months.map((month, i) => (
                  <div
                    key={month}
                    className="relative"
                    style={{ gridColumn: getMonthStartColumn(i) + 1 }}
                  >
                    {month}
                  </div>
                ))}
              </div>
              {contributionData.map((week, weekIndex) => (
                <div key={weekIndex} className="grid gap-[3px]">
                  {week.map((day, dayIndex) =>
                    day !== null ? (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className={`h-6 w-6 rounded-sm ${getBackgroundClass(
                          day
                        )}`}
                        title={getDateFromIndex(weekIndex, dayIndex)}
                      />
                    ) : (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className="h-6 w-6"
                      />
                    )
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default GraphCalendar;
