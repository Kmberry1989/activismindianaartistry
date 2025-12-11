export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <div className="space-y-2 text-center">
          <p className="text-sm leading-loose text-muted-foreground">
            This directory exists as a public record and living document of the work and achievements of Indiana artists and activists.</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            For educational purposes only, as a non-profit student project, respecting artists is core to our mission, so please reach out with any corrections or concerns.
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