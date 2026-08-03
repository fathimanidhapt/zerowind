import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "./ServiceCard";
import { services } from "../../data/services";

export default function Services() {
  return (
    <section className="pt-6 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">


      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            className={service.id === "vapora" ? "md:col-span-2" : ""}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
          >
            <ServiceCard service={service} isFullWidth={service.id === "vapora"} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
