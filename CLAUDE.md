# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Vite 5 は Node.js 18 以上が必要。システムの node が古い場合は `~/.nvm/versions/node/v24.15.0/bin` を PATH に追加して実行する。

```bash
cd todo
npm install        # install dependencies
npm run dev        # start dev server (http://localhost:5173)
npm run build      # type-check + production build
npm run preview    # preview production build
```

## Architecture

React 18 + TypeScript + Vite SPA。バックエンドなし。データは `localStorage` に永続化。

```
src/
  types.ts               # Todo インターフェースと Filter 型
  hooks/useTodos.ts      # 全状態管理ロジック（localStorage 同期含む）
  components/
    TodoInput.tsx        # 新規追加フォーム（Enter キーで追加）
    TodoItem.tsx         # 個別アイテム（チェックボックス・削除）
    TodoFilter.tsx       # フィルター切替・完了済み一括削除
  App.tsx                # ルートコンポーネント（useTodos を呼び出し props を配布）
  App.css                # 全スタイル（CSS Modules 不使用、グローバル）
```

状態は `useTodos` フックに集約し、コンポーネントは表示のみを担う。フィルタリングはフック内で行い、`allTodos`（全件）と `todos`（フィルタ済み）の両方を返す。
