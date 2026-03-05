import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, CheckCircle, TrendingUp, Target, DollarSign, Receipt, ArrowDown, Settings2, Calculator, CreditCard, User, Calendar, Banknote, Clock, CircleDot, SlidersHorizontal, FileText } from "lucide-react";
import { CategoryCard } from "../CategoryCard";
import { SubzoomHeader } from "../SubzoomHeader";
import { CategoryLegend } from "../CategoryLegend";
import { FlowNode } from "../FlowNode";
import { SubZoomContainer, StaggerContainer, StaggerItem } from "../SubZoomContainer";

const processes = [
  {
    id: "cotizacion",
    icon: Receipt,
    iconBg: "bg-gray-100 dark:bg-gray-800/30",
    iconColor: "text-gray-600 dark:text-gray-400",
    title: "Cotización",
    description: "Flujo ajustable por reglas de negocio",
    buttonColor: "bg-gradient-to-r from-gray-500 to-gray-600",
    itemCount: 5,
    tag: "Configurable",
    tags: [
      { icon: DollarSign, label: "Precio" },
      { icon: Calendar, label: "Plazos" },
      { icon: SlidersHorizontal, label: "Reglas" },
      { icon: CheckCircle, label: "Aprobación" },
    ],
  },
  {
    id: "lineas",
    icon: CreditCard,
    iconBg: "bg-orange-50 dark:bg-orange-900/20",
    iconColor: "text-orange-500 dark:text-orange-400",
    title: "Líneas de Crédito",
    description: "Configuración y gestión de líneas",
    buttonColor: "bg-gradient-to-r from-orange-400 to-orange-500",
    itemCount: 8,
    tag: "Flujo",
    tags: [
      { icon: User, label: "Persona" },
      { icon: Banknote, label: "Monto" },
      { icon: Calendar, label: "Fechas" },
      { icon: CircleDot, label: "Estado" },
    ],
  },
];

const legendItems = [
  { color: "bg-gray-500", label: "Cotización" },
  { color: "bg-orange-400", label: "Líneas de Crédito" },
];

// ---- COTIZACIÓN ----
const CotizacionView = () => (
  <motion.div className="p-6 rounded-3xl bg-card border border-border shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
    <div className="flex flex-col items-center">
      {[
        { icon: Target, title: "Definir condiciones", variant: "primary" as const, rules: ["Tipo de activo", "Moneda", "Plazo"] },
        { icon: Calculator, title: "Calcular rentas", variant: "primary" as const, rules: ["Tasa", "Valor residual", "Comisiones"] },
        { icon: BarChart3, title: "Análisis financiero", variant: "secondary" as const, rules: ["TIR", "VPN", "Spread"] },
        { icon: FileText, title: "Generar propuesta", variant: "accent" as const, rules: [] },
        { icon: CheckCircle, title: "Aprobación del cliente", variant: "muted" as const, rules: [] },
      ].map((step, i, arr) => (
        <div key={step.title} className="flex flex-col items-center w-full">
          <div className="flex items-center gap-4 w-full max-w-lg">
            <div className="flex-1">
              <FlowNode icon={step.icon} title={step.title} variant={step.variant} delay={0.3 + i * 0.12} showArrow={false} />
            </div>
            {step.rules.length > 0 && (
              <motion.div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-500/5 border border-gray-300/30" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.12 }}>
                <SlidersHorizontal className="w-3 h-3 text-gray-500 flex-shrink-0" />
                <div className="flex flex-col">
                  {step.rules.map(r => (
                    <span key={r} className="text-[10px] text-muted-foreground leading-tight">{r}</span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
          {i < arr.length - 1 && (
            <motion.div className="my-1" initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 0.4 + i * 0.1 }}>
              <ArrowDown className="w-4 h-4 text-muted-foreground" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
    <motion.div className="flex items-center justify-center gap-2 mt-4 px-4 py-2 rounded-lg bg-muted/50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
      <SlidersHorizontal className="w-3 h-3 text-primary" />
      <span className="text-[10px] text-muted-foreground">Todos los parámetros son <span className="text-primary font-semibold">ajustables según las reglas de negocio</span> configuradas</span>
    </motion.div>
  </motion.div>
);

// ---- LÍNEAS DE CRÉDITO ----
const LineasCreditoView = () => {
  const steps = [
    { label: "Configuración", icon: Settings2, isHeader: true },
    { label: "Persona física o jurídica", icon: User },
    { label: "Monto autorizado / disponible", icon: Banknote },
    { label: "Periodicidad de pago", icon: Clock },
  ];
  const branches = [
    { label: "Moneda", icon: DollarSign, side: "left" as const },
    { label: "Fecha de apertura", icon: Calendar, side: "right" as const },
  ];
  const bottomSteps = [
    { label: "Fecha de vencimiento", icon: Calendar, side: "left" as const },
    { label: "Estado", icon: CircleDot, side: "right" as const },
  ];

  return (
    <motion.div className="p-6 rounded-3xl bg-card border border-border shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
      <motion.div className="flex justify-center mb-4" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <div className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-bold flex items-center gap-2">
          <CreditCard className="w-4 h-4" />
          Líneas de Crédito
        </div>
      </motion.div>
      <div className="flex flex-col items-center">
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-col items-center">
            <motion.div className={`flex items-center gap-2 px-5 py-3 rounded-xl border shadow-sm ${step.isHeader ? "bg-muted border-border" : "bg-card border-border"}`} initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.12 }} whileHover={{ scale: 1.03 }}>
              <step.icon className={`w-4 h-4 ${step.isHeader ? "text-foreground" : "text-orange-500"}`} />
              <span className="text-xs font-semibold text-foreground">{step.label}</span>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 0.5 + i * 0.12 }}>
              <ArrowDown className="w-3 h-3 text-muted-foreground my-1" />
            </motion.div>
          </div>
        ))}
        <motion.div className="flex items-start gap-6 mt-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
          {branches.map((b, i) => (
            <motion.div key={b.label} className="flex flex-col items-center" initial={{ opacity: 0, x: b.side === "left" ? -20 : 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 + i * 0.1 }}>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border shadow-sm">
                <b.icon className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-semibold text-foreground">{b.label}</span>
              </div>
              <ArrowDown className="w-3 h-3 text-muted-foreground my-1 opacity-40" />
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="flex items-start gap-6 mt-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          {bottomSteps.map((b, i) => (
            <motion.div key={b.label} className="flex flex-col items-center" initial={{ opacity: 0, x: b.side === "left" ? -20 : 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3 + i * 0.1 }}>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border shadow-sm">
                <b.icon className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-semibold text-foreground">{b.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export const SlideProcesosFlow = () => {
  const [selectedProcess, setSelectedProcess] = useState<string | null>(null);
  const activeProcess = processes.find(p => p.id === selectedProcess);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <AnimatePresence mode="wait">
        {!selectedProcess ? (
          <motion.div key="processes" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }} transition={{ duration: 0.5 }}>
            <SubZoomContainer delay={0.1} direction="zoom" className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <TrendingUp className="w-10 h-10 text-primary" />
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">Procesos Comerciales</h2>
              </div>
              <p className="text-lg text-muted-foreground">Selecciona un proceso para ver su diagrama</p>
            </SubZoomContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {processes.map((process, index) => (
                <CategoryCard key={process.id} {...process} delay={0.2 + index * 0.15} onClick={() => setSelectedProcess(process.id)} />
              ))}
            </div>
            <CategoryLegend items={legendItems} />
          </motion.div>
        ) : (
          <motion.div key="flow" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.5 }}>
            {activeProcess && (
              <>
                <SubzoomHeader icon={activeProcess.icon} iconBg={activeProcess.iconBg} iconColor={activeProcess.iconColor} title={activeProcess.title} description={activeProcess.description} tag={activeProcess.tag} onBack={() => setSelectedProcess(null)} />
                {selectedProcess === "cotizacion" && <CotizacionView />}
                {selectedProcess === "lineas" && <LineasCreditoView />}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
