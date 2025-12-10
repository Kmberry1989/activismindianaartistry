export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <div className="space-y-2 text-center">
          <p className="text-sm leading-loose text-muted-foreground">
            This directory exists to serve as a public record and living document of the individual work and of the community achievements of Indiana artists, activists, and to chronicle their own revolutions.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Educational, non-profit student project. Respecting artists is core to our mission—please reach out with corrections or concerns.
          </p>
          <a
            href="mailto:activismindianaart@gmail.com?subject=Takedown%20Request"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Contact / Takedown Request
          </a>
        </div>
      </div>
    </footer>
  )
}