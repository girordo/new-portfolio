import { motion } from 'framer-motion'
import { shelfItems } from '../data/shelf'
import { Check, BookOpen } from 'lucide-react'

export const ShelfPage = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-10"
      >
        {/* Header */}
        <section className="space-y-3">
          <span className="text-[10px] uppercase tracking-[0.24em] font-mono-jb text-purple-400">
            Reading List & Continuous Learning
          </span>
          <h1 className="font-serif italic text-3xl sm:text-4xl text-slate-100">
            The Shelf
          </h1>
          <p className="font-reading text-sm text-slate-400 leading-relaxed max-w-xl">
            Books on software architecture, design trade-offs, and engineering
            foundation models currently shaping my daily practices.
          </p>
        </section>

        {/* Shelf Items List */}
        <section className="space-y-6 pt-4 border-t border-white/[0.06]">
          {shelfItems.map((item, idx) => (
            <article
              key={idx}
              className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all space-y-2.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h2 className="font-serif text-lg text-slate-100 font-medium">
                  {item.title}
                </h2>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[9px] font-mono-jb uppercase tracking-wider text-purple-300/80 px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                    {item.category}
                  </span>
                  <span
                    className={`text-[9px] font-mono-jb uppercase tracking-wider px-1.5 py-0.5 rounded flex items-center gap-1 ${
                      item.status === 'reading'
                        ? 'text-amber-400 bg-amber-400/10 border border-amber-400/20'
                        : 'text-emerald-400 bg-emerald-400/10 border border-emerald-400/20'
                    }`}
                  >
                    {item.status === 'reading' ? (
                      <>
                        <BookOpen className="w-2.5 h-2.5" />
                        <span>currently reading</span>
                      </>
                    ) : (
                      <>
                        <Check className="w-2.5 h-2.5" />
                        <span>read this year</span>
                      </>
                    )}
                  </span>
                </div>
              </div>

              <div className="text-xs font-reading italic text-slate-400">
                by {item.author}
              </div>

              {item.takeaway && (
                <p className="font-reading text-xs text-slate-300 leading-relaxed pt-1 border-t border-white/[0.04]">
                  {item.takeaway}
                </p>
              )}
            </article>
          ))}
        </section>
      </motion.div>
    </div>
  )
}
export default ShelfPage
