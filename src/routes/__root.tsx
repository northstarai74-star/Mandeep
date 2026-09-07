import { createRootRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'
import '../globals.css'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mandeep - Component Library</title>
      </head>
      <body>
        <Outlet />
      </body>
    </html>
  )
}
