export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <div className="main">{props.children}</div>
    </div>
  )
}