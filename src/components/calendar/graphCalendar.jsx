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
    const adjustedOffset = dayOffset - (firstDayOfYear === 0 ? 6 : firstDayOfYear - 1);
    
    date.setDate(date.getDate() + adjustedOffset);
    
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="h-full w-full overflow-x-auto bg-gray-950 flex items-center">
      <div className="w-max max-w-5xl rounded-lg p-4 text-sm text-gray-400">
        {/* Desplegable para seleccionar el año */}
        <div className="mb-4">
          <label htmlFor="year-select" className="mr-2 text-xs">
            Select Year:
          </label>
          <select
            id="year-select"
            value={year}
            onChange={handleYearChange}
            className="bg-gray-800 text-gray-400 p-1 rounded"
          >
            {Array.from({ length: 5 }, (_, i) => 2020 + i).map((yearOption) => (
              <option key={yearOption} value={yearOption}>
                {yearOption}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-2">
          <div className="grid gap-2 pt-6 text-xs">
            {days.map((day) => (
              <div key={day} className="h-4 text-right">
                {day}
              </div>
            ))}
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-[repeat(53,1fr)] gap-[3px]">
              <div className="col-span-full grid grid-cols-[repeat(53,1fr)] pb-2 text-center text-xs">
                {months.map((month, i) => (
                  <div
                    key={`${month}-${i}`}
                    className="col-start-[calc(4*var(--index)+1)]"
                    style={{ "--index": i }}
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
        </div>
      </div>
    </div>
  );
};

export default GraphCalendar;
