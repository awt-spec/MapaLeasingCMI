import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, BarChart3, Globe } from "lucide-react";
import { SubZoomContainer, StaggerContainer, StaggerItem } from "../SubZoomContainer";
import logoSysde from "@/assets/logo_sysde.png";
import logoCmi from "@/assets/logo_cmi_new.png";

const stats = [
  { icon: Zap, label: "Automatización", value: "100%", desc: "Procesos digitalizados" },
  { icon: Shield, label: "Gestión integral", value: "End-to-end", desc: "Ciclo completo de leasing" },
  { icon: BarChart3, label: "Reportes", value: "Tiempo real", desc: "Dashboards y regulatorios" },
  { icon: Globe, label: "Conectividad", value: "APIs", desc: "Integración total" },
];

export const SlideClosing = () => {
  return (
    <div className="w-full max-w-5xl mx-auto text-center relative">
      {/* Animated glow ring behind logos */}
      <SubZoomContainer delay={0.05} direction="zoom">
        <div className="relative flex items-center justify-center mb-8">
          {/* Pulsing ring */}
          <motion.div
            className="absolute w-52 h-52 rounded-full border-2 border-primary/20"
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-40 h-40 rounded-full border border-primary/30"
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.15, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />

          {/* Logo container */}
          <div className="relative flex items-center gap-5 z-10">
            <motion.div
              className="w-20 h-20 rounded-2xl bg-primary shadow-xl flex items-center justify-center p-3 ring-4 ring-primary/20"
              initial={{ x: -60, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
            >
              <img src={logoSysde} alt="Sysde" className="w-full h-full object-contain" />
            </motion.div>

            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <div className="w-8 h-[2px] bg-primary/40 rounded-full" />
              <span className="text-xs text-primary/60 font-bold my-1">×</span>
              <div className="w-8 h-[2px] bg-primary/40 rounded-full" />
            </motion.div>

            <motion.div
              className="h-20 rounded-2xl bg-card shadow-xl flex items-center justify-center px-3 py-2 ring-4 ring-border/30"
              initial={{ x: 60, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
            >
              <img src={logoCmi} alt="CMI" className="h-full w-auto object-contain" />
            </motion.div>
          </div>
        </div>
      </SubZoomContainer>

      {/* Title with gradient effect */}
      <SubZoomContainer delay={0.4} direction="bottom">
        <motion.h2
          className="text-5xl md:text-7xl font-black text-foreground mb-2 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ¡Gracias!
        </motion.h2>
        <motion.div
          className="w-24 h-1.5 bg-primary rounded-full mx-auto mb-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
        />
      </SubZoomContainer>

      <SubZoomContainer delay={0.6} direction="bottom">
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          <span className="text-primary font-bold">Sysde</span> — Potenciando los servicios financieros en el mundo digital
        </p>
      </SubZoomContainer>

      {/* Stats grid */}
      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8" staggerDelay={0.12} initialDelay={0.8}>
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <motion.div
              className="relative p-5 rounded-2xl bg-card border border-border shadow-sm overflow-hidden group"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Subtle accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary/60 rounded-t-2xl" />
              <stat.icon className="w-7 h-7 text-primary mx-auto mb-2" />
              <div className="text-lg font-extrabold text-foreground">{stat.value}</div>
              <div className="text-xs font-semibold text-primary/80 mb-0.5">{stat.label}</div>
              <div className="text-[10px] text-muted-foreground">{stat.desc}</div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Bottom tagline */}
      <SubZoomContainer delay={1.4} direction="zoom">
        <motion.div
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20"
          animate={{ boxShadow: ["0 0 0 0 hsl(var(--primary) / 0.2)", "0 0 0 12px hsl(var(--primary) / 0)", "0 0 0 0 hsl(var(--primary) / 0)"] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
        >
          <CheckCircle className="w-5 h-5 text-primary" />
          <span className="text-sm font-bold text-foreground">Listos para transformar su operación de leasing</span>
        </motion.div>
      </SubZoomContainer>
    </div>
  );
};
