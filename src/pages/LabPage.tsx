import { motion } from 'framer-motion'
import { labCategories } from '../data/lab'
import { Server, Terminal, ShieldCheck, Cpu } from 'lucide-react'

export const LabPage = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        {/* Header */}
        <section className="space-y-3">
          <span className="text-[10px] uppercase tracking-[0.24em] font-mono-jb text-sky-400">
            Systems & Infrastructure
          </span>
          <h1 className="font-serif italic text-3xl sm:text-4xl text-slate-100">
            Homelab & Cloud Infra
          </h1>
          <p className="font-reading text-sm text-slate-400 leading-relaxed max-w-xl">
            My hands-on infrastructure knowledge: personal home server running
            Proxmox VE and LXC containers, production cloud deployments on GCP
            and AWS, declarative IaC via Terraform & Ansible, and automated
            CI/CD.
          </p>
        </section>

        {/* Philosophy Callout */}
        <section className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-reading text-slate-300 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-mono-jb uppercase tracking-wider text-[10px]">
            <Terminal className="w-3.5 h-3.5" />
            <span>Infrastructure Mindset</span>
          </div>
          <p className="leading-relaxed">
            I leverage Proxmox and lightweight LXC containers for a clean,
            efficient virtualized homelab environment to run self-hosted tools.
            In production (Instituto Eldorado, Spocket, Bosch), I build
            reproducible cloud pipelines using Terraform, GCP (Cloud Run,
            Pub/Sub, GCS, Cloud SQL), AWS, Docker containers, and automated
            quality gates with SonarQube and Fortify.
          </p>
        </section>

        {/* Categories of Lab & Infra */}
        <section className="space-y-10 pt-4 border-t border-white/[0.06]">
          {labCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] font-mono-jb text-emerald-400 flex items-center gap-2">
                  <Server className="w-3.5 h-3.5" />
                  <span>{category.title}</span>
                </h2>
                <p className="text-xs font-reading text-slate-400 mt-1">
                  {category.description}
                </p>
              </div>

              <div className="space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-all space-y-2"
                  >
                    <h3 className="font-serif text-base text-slate-100 font-medium">
                      {item.name}
                    </h3>
                    <p className="font-reading text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono-jb text-slate-400 bg-white/[0.03] border border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </motion.div>
    </div>
  )
}
export default LabPage
