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
    let dayCount = 1; // Comenzamos desde el 1 de enero
    const firstDayOfYear = new Date(year, 0, 1).getDay(); // Día de la semana del 1 de enero
    let startDayIndex = firstDayOfYear === 0 ? 6 : firstDayOfYear - 1; // Ajustamos para que el lunes sea el primer día (0 = domingo)

    // Generamos las 53 semanas
    for (let i = 0; i < 53; i++) {
      const week = [];
      // Llenamos la semana con los días
      for (let j = 0; j < 7; j++) {
        if (dayCount <= totalDays) {
          if (i === 0 && j < startDayIndex) {
            // Dejamos la primera semana vacía hasta que llegue el primer día del año
            week.push(null);
          } else {
            week.push(Math.floor(Math.random() * 5)); // Generamos contribuciones aleatorias
            dayCount++;
          }
        } else {
          // Después del 31 de diciembre, días vacíos
          week.push(null);
        }
      }
      data.push(week);
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
        return "bg-emerald-900";
      case 2:
        return "bg-emerald-700";
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
    const currentYear = year || 2024;
    const startDate = new Date(currentYear, 0, 1); // El primer día del año
    const currentDate = new Date(startDate);

    // Ajustar la fecha según el índice de la semana y el índice de día dentro de esa semana
    currentDate.setDate(
      startDate.getDate() + (weekIndex * 7 + dayIndex) - startDate.getDay()
    ); // Resta el desplazamiento del primer día de la semana

    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Mes en formato 2 dígitos

    return `${day}/${month}/${currentYear}`;
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
                    // Renderizamos solo los días con datos válidos
                    day !== null ? (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className={`h-6 w-6 rounded-sm ${getBackgroundClass(
                          day
                        )}`}
                        title={getDateFromIndex(weekIndex, dayIndex)} // Mostrar la fecha exacta en el hover
                      />
                    ) : (
                      // No renderizamos nada si es un día vacío
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
