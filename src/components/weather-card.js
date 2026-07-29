import { weatherIcons } from "./icons.js";

export function weatherCard(weatherData) {
  const container = document.createElement("div");
  container.className =
    "weather-container flex justify-between bg-white gap-25 p-8 mt-8 rounded-2xl min-w-200 box-border";

  const feelsLikeCelcius = Math.round(
    (weatherData.days[0].feelslike - 32) * 5/9,
  );

  const tempMaxCelcius = Math.round(
    (weatherData.days[0].tempmax - 32) * 5/9,
  );
  const tempMinCelcius = Math.round(
    (weatherData.days[0].tempmin - 32) * 5/9,
  );

  const humidity = Math.round(weatherData.days[0].humidity);
  const windSpeed = Math.round(weatherData.days[0].windspeed);
  const pressure = Math.round(weatherData.days[0].pressure);

  const iconSvg =
    weatherIcons[weatherData.days[0].icon] ?? weatherIcons["cloudy"];

  container.innerHTML = `
  <div class="left flex flex-col justify-between gap-0.5">
          <p class="city text-3xl font-bold">${weatherData.address}</p>
          <p class="timezone">${weatherData.timezone}</p>
          <p class="temperature text-7xl font-bold">${weatherData.days[0].temp}℃</p>
          <p class="condition text-2xl">${weatherData.days[0].conditions}</p>
          <p class="feelslike">Feels like ${feelsLikeCelcius}℃</p>
        </div>
        <div class="mid flex items-center">
          ${iconSvg}
        </div>
        <div class="right flex flex-col gap-1">
          <div class="temperatures flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 128 128"
              width="50px"
              height="50px"
            >
              <g
                id="thermometer__thermometer"
                clip-path="url(#thermometer__clip0_1844_15667)"
              >
                <g id="thermometer__Thermometer Mercury">
                  <circle
                    id="thermometer__Reservoir"
                    cx="64"
                    cy="83"
                    r="9"
                    fill="#dc2626"
                  />
                  <rect
                    id="thermometer__Value"
                    width="6"
                    height="29"
                    x="61"
                    y="50"
                    fill="#dc2626"
                    rx="3"
                  >
                    <animateTransform
                      attributeName="transform"
                      begin="0s"
                      calcMode="spline"
                      dur="3s"
                      keySplines=".42 0 .58 1; .42 0 .58 1"
                      repeatCount="indefinite"
                      type="translate"
                      values="0 0;0 -2;0 0"
                    />
                  </rect>
                </g>
                <g id="thermometer__Thermometer Glass">
                  <path
                    id="thermometer__Glass"
                    fill="url(#thermometer__paint0_linear_1844_15667)"
                    stroke="#bfdbfe"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M50.5 83.191a13.05 13.05 0 0 1 1.523-6.14 13.5 13.5 0 0 1 4.261-4.776.5.5 0 0 0 .216-.41V38.778c0-1.926.786-3.776 2.191-5.142A7.62 7.62 0 0 1 64 31.5c1.993 0 3.903.77 5.309 2.137a7.17 7.17 0 0 1 2.191 5.142v3.268H65a.5.5 0 0 0 0 1h6.5v6.78H65a.5.5 0 1 0 0 1h6.5v6.778H65a.5.5 0 0 0 0 1h6.5V71.84a.5.5 0 0 0 .216.411 13.5 13.5 0 0 1 4.266 4.787A13.05 13.05 0 0 1 77.5 83.19v.002C77.5 90.543 71.48 96.5 64 96.5s-13.5-5.957-13.5-13.308z"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="thermometer__paint0_linear_1844_15667"
                  x1="64"
                  x2="64"
                  y1="31"
                  y2="97.121"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#dbeafe" stop-opacity=".25" />
                  <stop offset="1" stop-color="#bfdbfe" stop-opacity=".25" />
                </linearGradient>
                <clipPath id="thermometer__clip0_1844_15667">
                  <rect width="128" height="128" fill="#fff" />
                </clipPath>
              </defs>
            </svg>
            <div>
              <p class="font-semibold">${tempMaxCelcius}℃ / ${tempMinCelcius}℃</p>
              <p>High / Low</p>
            </div>
          </div>
          <hr class="border-t-2 border-gray-100" />
          <div class="humidity flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 128 128"
              width="50px"
              height="50px"
            >
              <g id="humidity__humidity">
                <g transform="translate(64.5 64.2)">
                  <g id="humidity__Raindrop" transform="translate(-64.5 -64.2)">
                    <path
                      id="humidity__Vector"
                      fill="url(#humidity__paint0_linear_1858_260)"
                      stroke="#1d4ed8"
                      stroke-miterlimit="10"
                      d="M64.5 34.907c5.752 8.707 10.461 15.798 13.759 22.048 3.375 6.398 5.241 11.863 5.241 17.22 0 10.682-8.51 19.325-19 19.325s-19-8.668-19-19.325c0-5.344 1.866-10.803 5.241-17.201 3.298-6.251 8.007-13.348 13.759-22.067Z"
                    />
                    <path
                      id="humidity__Label"
                      fill="#fff"
                      d="M59.867 73.936q-1.272 1.416-3.552 1.416-2.304 0-3.552-1.44-1.248-1.392-1.248-4.008t1.248-4.008 3.552-1.392 3.552 1.392q1.224 1.416 1.224 4.008 0 2.64-1.224 4.032m.432 8.424h-2.976l11.28-17.808h2.952zm-5.904-12.432q0 3.048 1.92 3.048t1.92-3.048q0-3.024-1.92-3.024t-1.92 3.024m21.84 11.016q-1.248 1.44-3.552 1.44t-3.528-1.44q-1.248-1.392-1.248-4.008t1.248-4.008q1.224-1.392 3.528-1.392t3.552 1.392q1.224 1.416 1.224 4.008 0 2.616-1.224 4.008m-3.552-7.008q-1.92 0-1.92 3.024t1.92 3.024 1.92-3.024-1.92-3.024"
                    />
                  </g>
                  <animateTransform
                    additive="sum"
                    attributeName="transform"
                    begin="0s"
                    calcMode="spline"
                    dur="3s"
                    keySplines=".42 0 .58 1; .42 0 .58 1"
                    repeatCount="indefinite"
                    type="scale"
                    values="1 1;1.1 1.1;1 1"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="humidity__paint0_linear_1858_260"
                  x1="64.5"
                  x2="64.5"
                  y1="34"
                  y2="94"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2563eb" />
                  <stop offset="1" stop-color="#1d4ed8" />
                </linearGradient>
              </defs>
            </svg>
            <div>
              <p class="font-semibold">${humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
          <hr class="border-t-2 border-gray-100" />
          <div class="wind flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 128 128"
              widht="50px"
              height="50px"
            >
              <g id="wind__wind">
                <g id="wind__Wind">
                  <path
                    id="wind__Wind Line 1"
                    stroke="#e2e8f0"
                    stroke-dasharray="50"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    d="M87.79 40.135c6.186-6.788 17.21-1.73 17.21 7.311C105 53.275 100.522 58 95 58H24"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      begin="0s"
                      dur="6s"
                      repeatCount="indefinite"
                      values="0;1000"
                    />
                  </path>
                  <path
                    id="wind__Wind Line 1_2"
                    stroke="#e2e8f0"
                    stroke-dasharray="50"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    d="M60.128 87.868C66.42 94.518 78 89.872 78 80.556 78 74.726 73.35 70 67.615 70H24"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      begin="-5.8s"
                      dur="6s"
                      repeatCount="indefinite"
                      values="0;1000"
                    />
                  </path>
                </g>
              </g>
            </svg>
            <div>
              <p class="font-semibold">${windSpeed} Km/h</p>
              <p>Wind</p>
            </div>
          </div>
          <hr class="border-t-2 border-gray-100" />
          <div class="pressure flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 128 128"
              width="50px"
              height="50px"
            >
              <g id="barometer__barometer">
                <g id="barometer__Barometer">
                  <circle
                    id="barometer__Housing"
                    cx="64"
                    cy="64"
                    r="39.5"
                    fill="url(#barometer__paint0_linear_1843_8093)"
                    stroke="#1e293b"
                  />
                  <g id="barometer__Lines">
                    <path
                      id="barometer__Line 1"
                      stroke="#64748b"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="M64 33v9"
                    />
                    <path
                      id="barometer__Line 7"
                      stroke="#64748b"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="m42.08 42.08 6.364 6.364"
                    />
                    <path
                      id="barometer__Line 5"
                      stroke="#64748b"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="m85.92 42.08-6.364 6.364"
                    />
                    <path
                      id="barometer__Line 3"
                      stroke="#64748b"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="M95 64h-9"
                    />
                    <path
                      id="barometer__Line 8"
                      stroke="#64748b"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="m79.556 79.556 6.364 6.364"
                    />
                    <path
                      id="barometer__Line 6"
                      stroke="#64748b"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="M48.444 79.556 42.08 85.92"
                    />
                    <path
                      id="barometer__Line 4"
                      stroke="#64748b"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="M42 64h-9"
                    />
                  </g>
                </g>
                <g id="barometer__Barometer_2">
                  <g
                    id="barometer__Pointer"
                    clip-path="url(#barometer__clip0_1843_8093)"
                  >
                    <circle
                      id="barometer__Needle Mount"
                      cx="64"
                      cy="64"
                      r="5"
                      fill="#ef4444"
                      transform="rotate(45 64 64)"
                    />
                    <rect
                      id="barometer__Needle"
                      width="4"
                      height="33"
                      x="79.556"
                      y="45.615"
                      fill="#ef4444"
                      rx="2"
                      transform="rotate(45 79.556 45.615)"
                    />
                    <circle
                      id="barometer__Holder"
                      cx="64"
                      cy="64"
                      r="2.5"
                      fill="#475569"
                      stroke="#293649"
                      transform="rotate(45 64 64)"
                    />
                    <animateTransform
                      attributeName="transform"
                      begin="0s"
                      calcMode="spline"
                      dur="3s"
                      keySplines=".42 0 .58 1; .42 0 .58 1"
                      repeatCount="indefinite"
                      type="rotate"
                      values="-6 64 64;6 64 64;-6 64 64"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <linearGradient
                  id="barometer__paint0_linear_1843_8093"
                  x1="64"
                  x2="64"
                  y1="24"
                  y2="104"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#334155" />
                  <stop offset="1" stop-color="#1e293b" />
                </linearGradient>
                <clipPath id="barometer__clip0_1843_8093">
                  <rect
                    width="10"
                    height="48"
                    fill="#fff"
                    transform="rotate(45 -13.784 115.22)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div>
              <p class="font-semibold">${pressure} hPa</p>
              <p>Pressure</p>
            </div>
          </div>
        </div>`;

  return container;
}
