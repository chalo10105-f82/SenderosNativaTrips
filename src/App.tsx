const assetPathPrefix = "/assets";
const imgRectangle = `${assetPathPrefix}/a570c.png`;
const imgRectangle1 = `${assetPathPrefix}/2a205.png`;
const imgRectangle2 = `${assetPathPrefix}/841dd.png`;
const imgRectangle3 = `${assetPathPrefix}/6a416.png`;
const imgRectangle4 = `${assetPathPrefix}/cae60.png`;
const imgRectangle5 = `${assetPathPrefix}/9899e.png`;
const imgRectangle6 = `${assetPathPrefix}/f31a9.png`;
const imgRectangle7 = `${assetPathPrefix}/6ee5a.png`;
const imgRectangle8 = `${assetPathPrefix}/eea02.png`;
const imgRectangle9 = `${assetPathPrefix}/262d2.png`;
const imgRectangle10 = `${assetPathPrefix}/94ac3.png`;
const imgRectangle11 = `${assetPathPrefix}/60077.png`;
const imgRectangle12 = `${assetPathPrefix}/6701e.png`;
const imgRectangle13 = `${assetPathPrefix}/9f525.png`;
const imgMountain = `${assetPathPrefix}/cdede.svg`;
const imgChevronDown = `${assetPathPrefix}/fc131.svg`;
const imgClock = `${assetPathPrefix}/d79b0.svg`;
const imgRoute = `${assetPathPrefix}/d0e96.svg`;
const imgEllipse = `${assetPathPrefix}/bacfb.svg`;
const imgEllipse1 = `${assetPathPrefix}/0fd00.svg`;
const imgMountain1 = `${assetPathPrefix}/84934.svg`;

export default function App() {
  return (
    <div className="bg-[#f5f1e7] flex flex-col items-start w-full min-h-screen" data-node-id="1:5">
      {/* Header */}
      <div className="bg-[#13201a] border-[#1e312b] border-b border-solid flex items-center justify-between px-[80px] py-[24px] w-full shrink-0" data-node-id="1:6">
        <div className="flex gap-[8px] items-center shrink-0" data-node-id="1:7">
          <div className="bg-[#dceb6b] flex items-center justify-center rounded-[16px] shrink-0 size-[32px]" data-node-id="1:8">
            <div className="flex flex-col items-center justify-center shrink-0 size-[18px]" data-node-id="1:9">
              <div className="relative shrink-0 size-[18px]" data-node-id="1:10">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMountain} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic shrink-0 text-[24px] text-white tracking-[-1px] whitespace-nowrap" data-node-id="1:12">
            NativaTrips
          </p>
        </div>
        <div className="flex gap-[32px] items-center leading-[normal] not-italic shrink-0 text-[16px] whitespace-nowrap" data-node-id="1:13">
          <p className="font-['Inter:Medium'] font-medium shrink-0 text-[#9aa8a0]" data-node-id="1:14">Inicio</p>
          <p className="font-['Inter:Bold'] font-bold shrink-0 text-[#dceb6b]" data-node-id="1:15">Senderos</p>
          <p className="font-['Inter:Medium'] font-medium shrink-0 text-[#9aa8a0]" data-node-id="1:16">Experiencias</p>
          <p className="font-['Inter:Medium'] font-medium shrink-0 text-[#9aa8a0]" data-node-id="1:17">Nosotros</p>
          <p className="font-['Inter:Medium'] font-medium shrink-0 text-[#9aa8a0]" data-node-id="1:18">Contacto</p>
        </div>
        <div className="[word-break:break-word] bg-[#dceb6b] flex font-['Inter:Bold'] font-bold gap-[8px] items-center justify-center leading-[normal] not-italic px-[28px] py-[14px] rounded-[100px] shrink-0 text-[#0f1914] text-[16px] whitespace-nowrap cursor-pointer" data-node-id="1:19">
          <p className="shrink-0" data-node-id="1:20">Reservar ahora</p>
          <p className="shrink-0" data-node-id="1:21">↗</p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="[word-break:break-word] bg-[#13201a] flex flex-col gap-[24px] items-start not-italic overflow-clip p-[80px] w-full shrink-0" data-node-id="1:22">
        <div className="flex gap-[8px] items-center leading-[normal] shrink-0 text-[14px] whitespace-nowrap" data-node-id="1:23">
          <p className="font-['Inter:Medium'] font-medium shrink-0 text-[#9aa8a0]" data-node-id="1:24">Inicio</p>
          <p className="font-['Inter:Medium'] font-medium shrink-0 text-[#9aa8a0]" data-node-id="1:25">{`>`}</p>
          <p className="font-['Inter:Semi_Bold'] font-semibold shrink-0 text-[#dceb6b]" data-node-id="1:26">Senderos</p>
        </div>
        <div className="flex flex-col font-['Inter:Bold'] font-bold gap-[16px] items-start leading-[normal] shrink-0 w-full" data-node-id="1:27">
          <p className="shrink-0 text-[#dceb6b] text-[14px] uppercase whitespace-nowrap" data-node-id="1:28">EXPLORA CHINGAZA</p>
          <p className="shrink-0 text-[64px] text-white tracking-[-1.28px]" data-node-id="1:29">Nuestros Senderos</p>
        </div>
        <p className="font-['Inter:Regular'] font-normal leading-[1.5] shrink-0 text-[#9aa8a0] text-[24px] max-w-[720px]" data-node-id="1:30">
          Descubre los 13 senderos autorizados que atraviesan el páramo, los bosques de niebla y las místicas lagunas sagradas del Parque Nacional Natural Chingaza.
        </p>
      </div>

      {/* Filter Section */}
      <div className="bg-[#f5f1e7] flex flex-col items-start px-[80px] py-[40px] w-full shrink-0" data-node-id="1:31">
        <div className="bg-white flex items-center justify-between p-[24px] rounded-[24px] w-full" data-node-id="1:32">
          <div className="flex flex-1 gap-[48px] items-center min-w-0" data-node-id="1:33">
            <div className="flex flex-col gap-[8px] items-start shrink-0 w-[220px]" data-node-id="1:34">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[12px] uppercase whitespace-nowrap" data-node-id="1:35">Fecha</p>
              <div className="border-[#f5f1e7] border-b-2 border-solid flex items-center justify-between pb-[8px] shrink-0 w-full" data-node-id="1:36">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[18px] whitespace-nowrap" data-node-id="1:37">Dic 2025</p>
                <div className="flex flex-col items-center justify-center shrink-0 size-[16px]" data-node-id="1:38">
                  <div className="relative shrink-0 size-[16px]" data-node-id="1:39">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-start shrink-0 w-[220px]" data-node-id="1:41">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[12px] uppercase whitespace-nowrap" data-node-id="1:42">Dificultad</p>
              <div className="border-[#f5f1e7] border-b-2 border-solid flex items-center justify-between pb-[8px] shrink-0 w-full" data-node-id="1:43">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[18px] whitespace-nowrap" data-node-id="1:44">Todas</p>
                <div className="flex flex-col items-center justify-center shrink-0 size-[16px]" data-node-id="1:45">
                  <div className="relative shrink-0 size-[16px]" data-node-id="1:46">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-0" data-node-id="1:48" />
            <div className="bg-[#f5f1e7] flex items-start px-[16px] py-[8px] rounded-[100px] shrink-0" data-node-id="1:49">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[14px] whitespace-nowrap" data-node-id="1:50">13 senderos encontrados</p>
            </div>
            <div className="[word-break:break-word] bg-[#dceb6b] flex font-['Inter:Bold'] font-bold gap-[8px] items-center justify-center leading-[normal] not-italic px-[28px] py-[14px] rounded-[100px] shrink-0 text-[#0f1914] text-[16px] whitespace-nowrap cursor-pointer" data-node-id="1:51">
              <p className="shrink-0" data-node-id="1:52">Buscar senderos</p>
              <p className="shrink-0" data-node-id="1:53">↗</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trails Grid Section */}
      <div className="bg-[#f5f1e7] flex flex-col gap-[56px] items-start pb-[80px] px-[80px] w-full shrink-0" data-node-id="1:54">
        <div className="[word-break:break-word] flex flex-col gap-[12px] items-start not-italic shrink-0 w-full whitespace-nowrap" data-node-id="1:55">
          <p className="font-['Inter:Bold'] font-bold leading-[normal] shrink-0 text-[#2e7d32] text-[12px] uppercase" data-node-id="1:56">CATÁLOGO OFICIAL</p>
          <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.1] shrink-0 text-[#0f1914] text-[40px]" data-node-id="1:57">Elige tu próximo destino</p>
        </div>
        <div className="flex flex-col gap-[40px] items-start shrink-0 w-full" data-node-id="1:58">

          {/* Row 0 */}
          <div className="grid grid-cols-3 gap-[40px] w-full" data-node-id="1:59">
            {/* Card: Sendero Suasie */}
            <div className="bg-white flex flex-col items-start justify-between overflow-clip rounded-[24px]" data-node-id="1:60">
              <div className="flex flex-col h-[220px] items-start shrink-0 w-full" data-node-id="1:61">
                <div className="flex-1 min-h-0 relative w-full" data-node-id="1:62">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-start p-[24px] shrink-0 w-full" data-node-id="1:63">
                <div className="flex items-center justify-between shrink-0 w-full" data-node-id="1:64">
                  <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#5e6c66] text-[11px] text-ellipsis uppercase w-[140px] whitespace-nowrap" data-node-id="1:65">SECTOR MONTERREDONDO</p>
                  <div className="bg-[#f9fbe7] flex items-start px-[10px] py-[4px] rounded-[100px] shrink-0" data-node-id="1:66">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#949b22] text-[11px] whitespace-nowrap" data-node-id="1:67">Moderado</p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#0f1914] text-[24px] text-ellipsis w-full whitespace-nowrap" data-node-id="1:68">Sendero Suasie</p>
                <div className="flex gap-[16px] items-start shrink-0 w-full" data-node-id="1:69">
                  <div className="flex gap-[6px] items-center shrink-0" data-node-id="1:70">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap" data-node-id="1:74">4h</p>
                  </div>
                  <div className="flex gap-[6px] items-center shrink-0" data-node-id="1:75">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRoute} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap" data-node-id="1:79">8.5km</p>
                  </div>
                </div>
                <div className="flex flex-col items-start shrink-0 w-full" data-node-id="1:80">
                  <div className="flex flex-col gap-[8px] items-start shrink-0 w-full" data-node-id="1:81">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[12px] whitespace-nowrap" data-node-id="1:82">Próximos cupos disponibles:</p>
                    <div className="flex gap-[6px] items-start shrink-0" data-node-id="1:83">
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Dic 14</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Dic 21</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Ene 4</p></div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f5f1e7] border-solid border-t flex items-start justify-between pt-[8px] shrink-0 w-full" data-node-id="1:90">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#2e7d32] text-[15px] whitespace-nowrap cursor-pointer">Ver sendero →</p>
                </div>
              </div>
            </div>

            {/* Card: Sendero Lagunas de Siecha */}
            <div className="bg-white flex flex-col items-start justify-between overflow-clip rounded-[24px]" data-node-id="1:92">
              <div className="flex flex-col h-[220px] items-start shrink-0 w-full">
                <div className="flex-1 min-h-0 relative w-full">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-start p-[24px] shrink-0 w-full">
                <div className="flex items-center justify-between shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#5e6c66] text-[11px] text-ellipsis uppercase w-[140px] whitespace-nowrap">SECTOR SIECHA</p>
                  <div className="bg-[#f9fbe7] flex items-start px-[10px] py-[4px] rounded-[100px] shrink-0">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#949b22] text-[11px] whitespace-nowrap">Moderado</p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#0f1914] text-[24px] text-ellipsis w-full whitespace-nowrap">Sendero Lagunas de Siecha</p>
                <div className="flex gap-[16px] items-start shrink-0 w-full">
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">5h</p>
                  </div>
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRoute} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">10km</p>
                  </div>
                </div>
                <div className="flex flex-col items-start shrink-0 w-full">
                  <div className="flex flex-col gap-[8px] items-start shrink-0 w-full">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[12px] whitespace-nowrap">Próximos cupos disponibles:</p>
                    <div className="flex gap-[6px] items-start shrink-0">
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Dic 15</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Dic 28</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Ene 11</p></div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f5f1e7] border-solid border-t flex items-start justify-between pt-[8px] shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#2e7d32] text-[15px] whitespace-nowrap cursor-pointer">Ver sendero →</p>
                </div>
              </div>
            </div>

            {/* Card: Sendero La Arboleda */}
            <div className="bg-white flex flex-col items-start justify-between overflow-clip rounded-[24px]" data-node-id="1:124">
              <div className="flex flex-col h-[220px] items-start shrink-0 w-full">
                <div className="flex-1 min-h-0 relative w-full">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle2} />
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-start p-[24px] shrink-0 w-full">
                <div className="flex items-center justify-between shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#5e6c66] text-[11px] text-ellipsis uppercase w-[140px] whitespace-nowrap">SECTOR MONTERREDONDO</p>
                  <div className="bg-[#e8f5e9] flex items-start px-[10px] py-[4px] rounded-[100px] shrink-0">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#2e7d32] text-[11px] whitespace-nowrap">Fácil</p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#0f1914] text-[24px] text-ellipsis w-full whitespace-nowrap">Sendero La Arboleda</p>
                <div className="flex gap-[16px] items-start shrink-0 w-full">
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">2h</p>
                  </div>
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRoute} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">3.2km</p>
                  </div>
                </div>
                <div className="flex flex-col items-start shrink-0 w-full">
                  <div className="flex flex-col gap-[8px] items-start shrink-0 w-full">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[12px] whitespace-nowrap">Próximos cupos disponibles:</p>
                    <div className="flex gap-[6px] items-start shrink-0">
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Dic 20</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Ene 3</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Ene 10</p></div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f5f1e7] border-solid border-t flex items-start justify-between pt-[8px] shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#2e7d32] text-[15px] whitespace-nowrap cursor-pointer">Ver sendero →</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-3 gap-[40px] w-full" data-node-id="1:156">
            {/* Card: Sendero Monterredondo */}
            <div className="bg-white flex flex-col items-start justify-between overflow-clip rounded-[24px]">
              <div className="flex flex-col h-[220px] items-start shrink-0 w-full">
                <div className="flex-1 min-h-0 relative w-full">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-start p-[24px] shrink-0 w-full">
                <div className="flex items-center justify-between shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#5e6c66] text-[11px] text-ellipsis uppercase w-[140px] whitespace-nowrap">SECTOR MONTERREDONDO</p>
                  <div className="bg-[#e8f5e9] flex items-start px-[10px] py-[4px] rounded-[100px] shrink-0">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#2e7d32] text-[11px] whitespace-nowrap">Fácil</p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#0f1914] text-[24px] text-ellipsis w-full whitespace-nowrap">Sendero Monterredondo</p>
                <div className="flex gap-[16px] items-start shrink-0 w-full">
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">1.5h</p>
                  </div>
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRoute} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">2.5km</p>
                  </div>
                </div>
                <div className="flex flex-col items-start shrink-0 w-full">
                  <div className="flex flex-col gap-[8px] items-start shrink-0 w-full">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[12px] whitespace-nowrap">Próximos cupos disponibles:</p>
                    <div className="flex gap-[6px] items-start shrink-0">
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Dic 14</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Dic 21</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Ene 4</p></div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f5f1e7] border-solid border-t flex items-start justify-between pt-[8px] shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#2e7d32] text-[15px] whitespace-nowrap cursor-pointer">Ver sendero →</p>
                </div>
              </div>
            </div>

            {/* Card: Sendero Cuchilla el Zaque */}
            <div className="bg-white flex flex-col items-start justify-between overflow-clip rounded-[24px]">
              <div className="flex flex-col h-[220px] items-start shrink-0 w-full">
                <div className="flex-1 min-h-0 relative w-full">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle4} />
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-start p-[24px] shrink-0 w-full">
                <div className="flex items-center justify-between shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#5e6c66] text-[11px] text-ellipsis uppercase w-[140px] whitespace-nowrap">SECTOR PIEDRAS GORDAS</p>
                  <div className="bg-[#fbe9e7] flex items-start px-[10px] py-[4px] rounded-[100px] shrink-0">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#d84315] text-[11px] whitespace-nowrap">Difícil</p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#0f1914] text-[24px] text-ellipsis w-full whitespace-nowrap">Sendero Cuchilla el Zaque</p>
                <div className="flex gap-[16px] items-start shrink-0 w-full">
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">6h</p>
                  </div>
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRoute} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">12km</p>
                  </div>
                </div>
                <div className="flex flex-col items-start shrink-0 w-full">
                  <div className="flex flex-col gap-[8px] items-start shrink-0 w-full">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[12px] whitespace-nowrap">Próximos cupos disponibles:</p>
                    <div className="flex gap-[6px] items-start shrink-0">
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Dic 27</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Ene 10</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Ene 24</p></div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f5f1e7] border-solid border-t flex items-start justify-between pt-[8px] shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#2e7d32] text-[15px] whitespace-nowrap cursor-pointer">Ver sendero →</p>
                </div>
              </div>
            </div>

            {/* Card: Sendero Laguna Seca */}
            <div className="bg-white flex flex-col items-start justify-between overflow-clip rounded-[24px]">
              <div className="flex flex-col h-[220px] items-start shrink-0 w-full">
                <div className="flex-1 min-h-0 relative w-full">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle5} />
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-start p-[24px] shrink-0 w-full">
                <div className="flex items-center justify-between shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#5e6c66] text-[11px] text-ellipsis uppercase w-[140px] whitespace-nowrap">SECTOR MONTERREDONDO</p>
                  <div className="bg-[#f9fbe7] flex items-start px-[10px] py-[4px] rounded-[100px] shrink-0">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#949b22] text-[11px] whitespace-nowrap">Moderado</p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#0f1914] text-[24px] text-ellipsis w-full whitespace-nowrap">Sendero Laguna Seca</p>
                <div className="flex gap-[16px] items-start shrink-0 w-full">
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">3.5h</p>
                  </div>
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRoute} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">7km</p>
                  </div>
                </div>
                <div className="flex flex-col items-start shrink-0 w-full">
                  <div className="flex flex-col gap-[8px] items-start shrink-0 w-full">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[12px] whitespace-nowrap">Próximos cupos disponibles:</p>
                    <div className="flex gap-[6px] items-start shrink-0">
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Dic 20</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Ene 3</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Ene 17</p></div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f5f1e7] border-solid border-t flex items-start justify-between pt-[8px] shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#2e7d32] text-[15px] whitespace-nowrap cursor-pointer">Ver sendero →</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 gap-[40px] w-full" data-node-id="1:253">
            {/* Card: Sendero Los Cáquezas */}
            <div className="bg-white flex flex-col items-start justify-between overflow-clip rounded-[24px]">
              <div className="flex flex-col h-[220px] items-start shrink-0 w-full">
                <div className="flex-1 min-h-0 relative w-full">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle6} />
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-start p-[24px] shrink-0 w-full">
                <div className="flex items-center justify-between shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#5e6c66] text-[11px] text-ellipsis uppercase w-[140px] whitespace-nowrap">SECTOR PIEDRAS GORDAS</p>
                  <div className="bg-[#fbe9e7] flex items-start px-[10px] py-[4px] rounded-[100px] shrink-0">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#d84315] text-[11px] whitespace-nowrap">Difícil</p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#0f1914] text-[24px] text-ellipsis w-full whitespace-nowrap">Sendero Los Cáquezas</p>
                <div className="flex gap-[16px] items-start shrink-0 w-full">
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">7h</p>
                  </div>
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRoute} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">14km</p>
                  </div>
                </div>
                <div className="flex flex-col items-start shrink-0 w-full">
                  <div className="flex flex-col gap-[8px] items-start shrink-0 w-full">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[12px] whitespace-nowrap">Próximos cupos disponibles:</p>
                    <div className="flex gap-[6px] items-start shrink-0">
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Dic 28</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Ene 11</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Ene 25</p></div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f5f1e7] border-solid border-t flex items-start justify-between pt-[8px] shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#2e7d32] text-[15px] whitespace-nowrap cursor-pointer">Ver sendero →</p>
                </div>
              </div>
            </div>

            {/* Card: Sendero Río La Playa */}
            <div className="bg-white flex flex-col items-start justify-between overflow-clip rounded-[24px]">
              <div className="flex flex-col h-[220px] items-start shrink-0 w-full">
                <div className="flex-1 min-h-0 relative w-full">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle7} />
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-start p-[24px] shrink-0 w-full">
                <div className="flex items-center justify-between shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#5e6c66] text-[11px] text-ellipsis uppercase w-[140px] whitespace-nowrap">SECTOR LA PAILA</p>
                  <div className="bg-[#e8f5e9] flex items-start px-[10px] py-[4px] rounded-[100px] shrink-0">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#2e7d32] text-[11px] whitespace-nowrap">Fácil</p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#0f1914] text-[24px] text-ellipsis w-full whitespace-nowrap">Sendero Río La Playa</p>
                <div className="flex gap-[16px] items-start shrink-0 w-full">
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">2.5h</p>
                  </div>
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRoute} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">4km</p>
                  </div>
                </div>
                <div className="flex flex-col items-start shrink-0 w-full">
                  <div className="flex flex-col gap-[8px] items-start shrink-0 w-full">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[12px] whitespace-nowrap">Próximos cupos disponibles:</p>
                    <div className="flex gap-[6px] items-start shrink-0">
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Dic 21</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Ene 4</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Ene 18</p></div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f5f1e7] border-solid border-t flex items-start justify-between pt-[8px] shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#2e7d32] text-[15px] whitespace-nowrap cursor-pointer">Ver sendero →</p>
                </div>
              </div>
            </div>

            {/* Card: Sendero El Retiro */}
            <div className="bg-white flex flex-col items-start justify-between overflow-clip rounded-[24px]">
              <div className="flex flex-col h-[220px] items-start shrink-0 w-full">
                <div className="flex-1 min-h-0 relative w-full">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle8} />
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-start p-[24px] shrink-0 w-full">
                <div className="flex items-center justify-between shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#5e6c66] text-[11px] text-ellipsis uppercase w-[140px] whitespace-nowrap">SECTOR LA PAILA</p>
                  <div className="bg-[#f9fbe7] flex items-start px-[10px] py-[4px] rounded-[100px] shrink-0">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#949b22] text-[11px] whitespace-nowrap">Moderado</p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#0f1914] text-[24px] text-ellipsis w-full whitespace-nowrap">Sendero El Retiro</p>
                <div className="flex gap-[16px] items-start shrink-0 w-full">
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">4h</p>
                  </div>
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRoute} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">8km</p>
                  </div>
                </div>
                <div className="flex flex-col items-start shrink-0 w-full">
                  <div className="flex flex-col gap-[8px] items-start shrink-0 w-full">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[12px] whitespace-nowrap">Próximos cupos disponibles:</p>
                    <div className="flex gap-[6px] items-start shrink-0">
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Dic 21</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Dic 28</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Ene 4</p></div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f5f1e7] border-solid border-t flex items-start justify-between pt-[8px] shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#2e7d32] text-[15px] whitespace-nowrap cursor-pointer">Ver sendero →</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-3 gap-[40px] w-full" data-node-id="1:350">
            {/* Card: Sendero Chorreras */}
            <div className="bg-white flex flex-col items-start justify-between overflow-clip rounded-[24px]">
              <div className="flex flex-col h-[220px] items-start shrink-0 w-full">
                <div className="flex-1 min-h-0 relative w-full">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle9} />
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-start p-[24px] shrink-0 w-full">
                <div className="flex items-center justify-between shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#5e6c66] text-[11px] text-ellipsis uppercase w-[140px] whitespace-nowrap">SECTOR MONTERREDONDO</p>
                  <div className="bg-[#ffebee] flex items-start px-[10px] py-[4px] rounded-[100px] shrink-0">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#c62828] text-[11px] whitespace-nowrap">Exigente</p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#0f1914] text-[24px] text-ellipsis w-full whitespace-nowrap">Sendero Chorreras</p>
                <div className="flex gap-[16px] items-start shrink-0 w-full">
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">8h</p>
                  </div>
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRoute} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">16km</p>
                  </div>
                </div>
                <div className="flex flex-col items-start shrink-0 w-full">
                  <div className="flex flex-col gap-[8px] items-start shrink-0 w-full">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[12px] whitespace-nowrap">Próximos cupos disponibles:</p>
                    <div className="flex gap-[6px] items-start shrink-0">
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Dic 28</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Ene 4</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Ene 18</p></div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f5f1e7] border-solid border-t flex items-start justify-between pt-[8px] shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#2e7d32] text-[15px] whitespace-nowrap cursor-pointer">Ver sendero →</p>
                </div>
              </div>
            </div>

            {/* Card: Sendero Piedras Gordas */}
            <div className="bg-white flex flex-col items-start justify-between overflow-clip rounded-[24px]">
              <div className="flex flex-col h-[220px] items-start shrink-0 w-full">
                <div className="flex-1 min-h-0 relative w-full">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle10} />
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-start p-[24px] shrink-0 w-full">
                <div className="flex items-center justify-between shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#5e6c66] text-[11px] text-ellipsis uppercase w-[140px] whitespace-nowrap">SECTOR PIEDRAS GORDAS</p>
                  <div className="bg-[#fbe9e7] flex items-start px-[10px] py-[4px] rounded-[100px] shrink-0">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#d84315] text-[11px] whitespace-nowrap">Difícil</p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#0f1914] text-[24px] text-ellipsis w-full whitespace-nowrap">Sendero Piedras Gordas</p>
                <div className="flex gap-[16px] items-start shrink-0 w-full">
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">5.5h</p>
                  </div>
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRoute} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">11km</p>
                  </div>
                </div>
                <div className="flex flex-col items-start shrink-0 w-full">
                  <div className="flex flex-col gap-[8px] items-start shrink-0 w-full">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[12px] whitespace-nowrap">Próximos cupos disponibles:</p>
                    <div className="flex gap-[6px] items-start shrink-0">
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Dic 27</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Ene 10</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Ene 24</p></div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f5f1e7] border-solid border-t flex items-start justify-between pt-[8px] shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#2e7d32] text-[15px] whitespace-nowrap cursor-pointer">Ver sendero →</p>
                </div>
              </div>
            </div>

            {/* Card: Sendero La Paila */}
            <div className="bg-white flex flex-col items-start justify-between overflow-clip rounded-[24px]">
              <div className="flex flex-col h-[220px] items-start shrink-0 w-full">
                <div className="flex-1 min-h-0 relative w-full">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle11} />
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-start p-[24px] shrink-0 w-full">
                <div className="flex items-center justify-between shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#5e6c66] text-[11px] text-ellipsis uppercase w-[140px] whitespace-nowrap">SECTOR LA PAILA</p>
                  <div className="bg-[#e8f5e9] flex items-start px-[10px] py-[4px] rounded-[100px] shrink-0">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#2e7d32] text-[11px] whitespace-nowrap">Fácil</p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#0f1914] text-[24px] text-ellipsis w-full whitespace-nowrap">Sendero La Paila</p>
                <div className="flex gap-[16px] items-start shrink-0 w-full">
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">1h</p>
                  </div>
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRoute} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">1.8km</p>
                  </div>
                </div>
                <div className="flex flex-col items-start shrink-0 w-full">
                  <div className="flex flex-col gap-[8px] items-start shrink-0 w-full">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[12px] whitespace-nowrap">Próximos cupos disponibles:</p>
                    <div className="flex gap-[6px] items-start shrink-0">
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Dic 14</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Dic 21</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Ene 4</p></div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f5f1e7] border-solid border-t flex items-start justify-between pt-[8px] shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#2e7d32] text-[15px] whitespace-nowrap cursor-pointer">Ver sendero →</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4 — single card */}
          <div className="grid grid-cols-3 gap-[40px] w-full" data-node-id="1:447">
            {/* Card: Sendero Bosque de Niebla */}
            <div className="bg-white flex flex-col items-start justify-between overflow-clip rounded-[24px]">
              <div className="flex flex-col h-[220px] items-start shrink-0 w-full">
                <div className="flex-1 min-h-0 relative w-full">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle12} />
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-start p-[24px] shrink-0 w-full">
                <div className="flex items-center justify-between shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#5e6c66] text-[11px] text-ellipsis uppercase w-[140px] whitespace-nowrap">SECTOR MONTERREDONDO</p>
                  <div className="bg-[#f9fbe7] flex items-start px-[10px] py-[4px] rounded-[100px] shrink-0">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#949b22] text-[11px] whitespace-nowrap">Moderado</p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#0f1914] text-[24px] text-ellipsis w-full whitespace-nowrap">Sendero Bosque de Niebla</p>
                <div className="flex gap-[16px] items-start shrink-0 w-full">
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">3h</p>
                  </div>
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRoute} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap">5.5km</p>
                  </div>
                </div>
                <div className="flex flex-col items-start shrink-0 w-full">
                  <div className="flex flex-col gap-[8px] items-start shrink-0 w-full">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[12px] whitespace-nowrap">Próximos cupos disponibles:</p>
                    <div className="flex gap-[6px] items-start shrink-0">
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Dic 15</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Dic 28</p></div>
                      <div className="bg-[#f5f1e7] flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#0f1914] text-[12px] whitespace-nowrap">Ene 11</p></div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f5f1e7] border-solid border-t flex items-start justify-between pt-[8px] shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#2e7d32] text-[15px] whitespace-nowrap cursor-pointer">Ver sendero →</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* State Demonstration Section */}
      <div className="bg-[#f5f1e7] flex flex-col gap-[40px] items-start pb-[104px] px-[80px] w-full shrink-0" data-node-id="1:480">
        <div className="border-[#cfcebf] border-solid border-t h-[100px] w-full" data-node-id="1:481" />
        <div className="flex items-end justify-between shrink-0 w-full" data-node-id="1:482">
          <div className="[word-break:break-word] flex flex-col gap-[12px] items-start not-italic shrink-0 w-[600px]" data-node-id="1:483">
            <p className="font-['Inter:Bold'] font-bold leading-[normal] shrink-0 text-[#c62828] text-[12px] uppercase whitespace-nowrap" data-node-id="1:484">DEMOSTRACIÓN DE ESTADO</p>
            <p className="font-['Inter:Regular'] font-normal leading-[1.5] shrink-0 text-[#0f1914] text-[24px] whitespace-nowrap" data-node-id="1:485">Estado: Sin cupos disponibles</p>
            <p className="font-['Inter:Regular'] font-normal leading-[normal] shrink-0 text-[#5e6c66] text-[16px]" data-node-id="1:486">
              Así es como verás las tarjetas cuando un sendero haya completado su capacidad máxima permitida para las fechas seleccionadas, sugiriendo alternativas sustentables.
            </p>
          </div>
        </div>
        <div className="flex items-start shrink-0 w-full" data-node-id="1:487">
          <div className="flex items-start shrink-0 w-[400px]" data-node-id="1:488">
            <div className="bg-white flex flex-1 flex-col items-start justify-between min-w-0 overflow-clip rounded-[24px] self-stretch" data-node-id="1:489">
              <div className="flex flex-col h-[220px] items-start shrink-0 w-full" data-node-id="1:490">
                <div className="flex-1 min-h-0 relative w-full" data-node-id="1:491">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle13} />
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-start p-[24px] shrink-0 w-full" data-node-id="1:492">
                <div className="flex items-center justify-between shrink-0 w-full" data-node-id="1:493">
                  <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#5e6c66] text-[11px] text-ellipsis uppercase w-[140px] whitespace-nowrap" data-node-id="1:494">SECTOR MONTERREDONDO</p>
                  <div className="bg-[#ffebee] flex items-start px-[10px] py-[4px] rounded-[100px] shrink-0" data-node-id="1:495">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#c62828] text-[11px] whitespace-nowrap" data-node-id="1:496">Exigente</p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic overflow-hidden shrink-0 text-[#0f1914] text-[24px] text-ellipsis w-full whitespace-nowrap" data-node-id="1:497">Sendero Chorreras</p>
                <div className="flex gap-[16px] items-start shrink-0 w-full" data-node-id="1:498">
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap" data-node-id="1:503">8h</p>
                  </div>
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRoute} /></div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap" data-node-id="1:508">16km</p>
                  </div>
                </div>
                <div className="flex flex-col items-start shrink-0 w-full" data-node-id="1:509">
                  <div className="flex flex-col gap-[12px] items-start shrink-0 w-full" data-node-id="1:510">
                    <div className="flex gap-[6px] items-center shrink-0" data-node-id="1:511">
                      <div className="relative shrink-0 size-[6px]" data-node-id="1:512">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#c62828] text-[13px] whitespace-nowrap" data-node-id="1:513">Sin cupos disponibles para esta fecha</p>
                    </div>
                    <div className="flex flex-col gap-[8px] items-start shrink-0 w-full" data-node-id="1:514">
                      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[12px] whitespace-nowrap" data-node-id="1:515">Fechas alternas sugeridas:</p>
                      <div className="flex flex-wrap gap-[6px] items-start shrink-0" data-node-id="1:516">
                        <div className="border border-[#5e6c66] border-solid flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[12px] whitespace-nowrap">Ene 18</p></div>
                        <div className="border border-[#5e6c66] border-solid flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[12px] whitespace-nowrap">Feb 01</p></div>
                        <div className="border border-[#5e6c66] border-solid flex items-start px-[10px] py-[6px] rounded-[8px] shrink-0"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[12px] whitespace-nowrap">Feb 15</p></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f5f1e7] border-solid border-t flex items-start justify-between pt-[8px] shrink-0 w-full" data-node-id="1:523">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic shrink-0 text-[#2e7d32] text-[15px] whitespace-nowrap cursor-pointer" data-node-id="1:524">Ver sendero →</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA Section */}
      <div className="bg-[#13201a] flex flex-col gap-[48px] items-center overflow-clip px-[80px] py-[120px] relative w-full shrink-0" data-node-id="1:525">
        <div className="-translate-x-1/2 absolute bottom-[-250px] h-[400px] left-1/2 w-[600px]" data-node-id="1:526">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
        </div>
        <div className="[word-break:break-word] flex flex-col gap-[24px] items-center not-italic shrink-0 w-[800px]" data-node-id="1:527">
          <p className="font-['Inter:Bold'] font-bold leading-[normal] shrink-0 text-[#dceb6b] text-[14px] uppercase whitespace-nowrap" data-node-id="1:528">AVENTURA RESPONSABLE</p>
          <p className="font-['Inter:Bold'] font-bold leading-[normal] shrink-0 text-[64px] text-center text-white tracking-[-1.28px]" data-node-id="1:529">Reserva tu próxima caminata</p>
          <p className="font-['Inter:Regular'] font-normal leading-[1.5] shrink-0 text-[#9aa8a0] text-[24px] text-center w-[640px]" data-node-id="1:530">
            El turismo responsable apoya la conservación del páramo y el desarrollo de las comunidades locales. Cupos estrictamente limitados para mitigar el impacto ambiental.
          </p>
        </div>
        <div className="[word-break:break-word] bg-[#dceb6b] flex font-['Inter:Bold'] font-bold gap-[8px] items-center justify-center leading-[normal] not-italic px-[28px] py-[14px] rounded-[100px] shrink-0 text-[#0f1914] text-[16px] whitespace-nowrap cursor-pointer" data-node-id="1:531">
          <p className="shrink-0" data-node-id="1:532">Explorar fechas disponibles</p>
          <p className="shrink-0" data-node-id="1:533">↗</p>
        </div>
        <div className="border-[#1e312b] border-solid border-t flex items-center justify-between pt-[64px] shrink-0 w-full" data-node-id="1:534">
          <div className="flex gap-[8px] items-center shrink-0" data-node-id="1:535">
            <div className="bg-[#dceb6b] flex items-center justify-center rounded-[12px] shrink-0 size-[24px]" data-node-id="1:536">
              <div className="flex flex-col items-center justify-center shrink-0 size-[12px]" data-node-id="1:537">
                <div className="relative shrink-0 size-[12px]" data-node-id="1:538">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMountain1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="1:540">NativaTrips</p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic shrink-0 text-[#5e6c66] text-[14px] whitespace-nowrap" data-node-id="1:541">© 2025 NativaTrips Colombia S.A.S. - Operador turístico autorizado de PNN Chingaza.</p>
        </div>
      </div>
    </div>
  );
}
