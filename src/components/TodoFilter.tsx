import type { Filter } from '../types'

const LABELS: Record<Filter, string> = {
  all: 'すべて',
  active: '未完了',
  completed: '完了済み',
}

interface Props {
  current: Filter
  activeCount: number
  completedCount: number
  onFilterChange: (f: Filter) => void
  onClearCompleted: () => void
}

export function TodoFilter({ current, activeCount, completedCount, onFilterChange, onClearCompleted }: Props) {
  return (
    <div className="todo-footer">
      <span className="count">{activeCount}件残り</span>
      <div className="filters">
        {(Object.keys(LABELS) as Filter[]).map(f => (
          <button
            key={f}
            className={current === f ? 'active' : ''}
            onClick={() => onFilterChange(f)}
          >
            {LABELS[f]}
          </button>
        ))}
      </div>
      {completedCount > 0 && (
        <button className="clear-btn" onClick={onClearCompleted}>
          完了済みを削除
        </button>
      )}
    </div>
  )
}
