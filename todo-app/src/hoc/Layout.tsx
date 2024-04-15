export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <main className="main">{props.children}</main>
    </div>
  )
}