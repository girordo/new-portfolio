import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import { ArrowUpRight } from 'lucide-react'

export const Hero = () => {
  return (
    <section data-testid="hero-component" className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-8"
      >
        {/* Profile Identity */}
        <div className="flex gap-3.5 items-center">
          <div className="flex justify-center items-center w-11 h-11 font-mono-jb text-sm font-bold text-white bg-gradient-to-tr from-emerald-500 via-sky-500 to-purple-600 rounded-md ring-1 ring-white/20 shadow-md">
            TG
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-2xl italic text-slate-100 sm:text-3xl">
              {profile.name}
            </span>
            <span className="mt-1.5 font-mono-jb text-[10.5px] tracking-[0.24em] text-slate-400 uppercase">
              aka @{profile.handle} · {profile.title}
            </span>
          </div>
        </div>

        {/* Editorial Narrative strictly based on cv_data.yaml */}
        <div className="space-y-5 font-reading text-[15px] leading-[1.8] text-slate-300 sm:text-[16px]">
          <p>
            <em className="font-serif text-[18px] italic text-emerald-400">
              Senior software engineer
            </em>{' '}
            with over 8 years of experience across diverse business domains.
            Mainly focused on{' '}
            <span className="font-mono-jb text-[0.88em] text-emerald-300">
              TypeScript
            </span>{' '}
            and its ecosystem (
            <span className="font-mono-jb text-[0.88em] text-slate-200">
              React
            </span>
            ,{' '}
            <span className="font-mono-jb text-[0.88em] text-slate-200">
              Node.js
            </span>
            ,{' '}
            <span className="font-mono-jb text-[0.88em] text-slate-200">
              NestJS
            </span>
            ,{' '}
            <span className="font-mono-jb text-[0.88em] text-slate-200">
              Bun
            </span>
            ), using{' '}
            <span className="font-mono-jb text-[0.88em] text-sky-300">
              Python
            </span>{' '}
            as a side language for backend development and AI/ML tasks.
          </p>

          <p>
            Currently serving as technical reference and engineering lead for
            enterprise products for{' '}
            <span className="font-medium text-slate-100">
              Motorola (Lenovo)
            </span>{' '}
            at{' '}
            <a
              href={profile.currentCompany.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex gap-0.5 items-center font-medium text-slate-100 underline decoration-emerald-500/50 hover:decoration-emerald-400 underline-offset-[3px] transition-colors"
            >
              {profile.currentCompany.name}
              <ArrowUpRight className="inline w-3.5 h-3.5 text-slate-400" />
            </a>
            . Experienced in cloud & infra with{' '}
            <span className="font-mono-jb text-[0.88em] text-slate-200">
              GCP
            </span>
            ,{' '}
            <span className="font-mono-jb text-[0.88em] text-slate-200">
              AWS
            </span>
            ,{' '}
            <span className="font-mono-jb text-[0.88em] text-slate-200">
              Terraform
            </span>
            ,{' '}
            <span className="font-mono-jb text-[0.88em] text-slate-200">
              Ansible
            </span>
            ,{' '}
            <span className="font-mono-jb text-[0.88em] text-slate-200">
              Docker
            </span>
            , and self-hosted{' '}
            <span className="font-mono-jb text-[0.88em] text-slate-200">
              Proxmox / LXC
            </span>
            . Holds a BSc in Biomedical Informatics from{' '}
            <span className="text-slate-200">
              Universidade de São Paulo (USP).
            </span>{' '}
          </p>

          <p className="pt-1 font-serif text-[15px] italic text-slate-400">
            {profile.interests}
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
