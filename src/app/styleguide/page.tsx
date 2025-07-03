import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const metadata: Metadata = {
  title: 'Style Guide',
  description: 'Comprehensive showcase of design tokens, components, and patterns.',
}

const spacingTokens = [
  '0', '2', '4', '8', '10', '12', '14', '16', '18', '20', 
  '22', '24', '26', '28', '30', '32', '34', '36', '38', '40'
] as const

const colorShades = [
  '100', '90', '80', '70', '60', '50', '40', '30', '20', '10'
] as const

const grayShades = [
  'white', '110', '100', '90', '80', '70', '60', '50', '40', '30', '20', '10', 'black'
] as const

const borderRadiusOptions = [
  { name: 'None', class: 'rounded-none' },
  { name: 'Small', class: 'rounded-small' },
  { name: 'Medium', class: 'rounded-medium' },
  { name: 'Large', class: 'rounded-large' },
  { name: 'Full', class: 'rounded-full' },
] as const

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-bg-primary text-fg-primary p-16">
      <div className="mx-auto max-w-6xl space-y-32">
        {/* Header */}
        <header>
          <h1 className="mb-8 text-4xl font-bold">Design System Style Guide</h1>
          <p className="text-lg text-fg-secondary">
            A comprehensive showcase of our design tokens, components, and patterns.
          </p>
        </header>

        {/* Colors Section */}
        <section>
          <h2 className="mb-16 text-3xl font-semibold">Colors</h2>
          
          {/* Semantic Colors */}
          <div className="mb-20">
            <h3 className="mb-10 text-xl font-medium">Semantic Colors</h3>
            
            {/* Foreground Colors */}
            <div className="mb-12">
              <h4 className="mb-6 text-lg font-medium">Foreground</h4>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="space-y-4">
                  <div className="flex h-16 w-full items-center justify-center rounded-medium border border-border-primary bg-bg-secondary">
                    <span className="font-medium text-fg-primary">Primary</span>
                  </div>
                  <p className="text-sm text-fg-secondary">text-fg-primary</p>
                </div>
                <div className="space-y-4">
                  <div className="flex h-16 w-full items-center justify-center rounded-medium border border-border-primary bg-bg-secondary">
                    <span className="font-medium text-fg-secondary">Secondary</span>
                  </div>
                  <p className="text-sm text-fg-secondary">text-fg-secondary</p>
                </div>
                <div className="space-y-4">
                  <div className="flex h-16 w-full items-center justify-center rounded-medium border border-border-primary bg-bg-secondary">
                    <span className="font-medium text-fg-tertiary">Tertiary</span>
                  </div>
                  <p className="text-sm text-fg-secondary">text-fg-tertiary</p>
                </div>
                <div className="space-y-4">
                  <div className="flex h-16 w-full items-center justify-center rounded-medium border border-border-primary bg-bg-secondary">
                    <span className="font-medium text-fg-quarternary">Quaternary</span>
                  </div>
                  <p className="text-sm text-fg-secondary">text-fg-quarternary</p>
                </div>
              </div>
            </div>

            {/* Background Colors */}
            <div className="mb-12">
              <h4 className="mb-6 text-lg font-medium">Background</h4>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="space-y-4">
                  <div className="flex h-16 w-full items-center justify-center rounded-medium border-2 border-border-accent bg-bg-primary">
                    <span className="text-sm font-medium text-fg-primary">Primary</span>
                  </div>
                  <p className="text-sm text-fg-secondary">bg-bg-primary</p>
                </div>
                <div className="space-y-4">
                  <div className="flex h-16 w-full items-center justify-center rounded-medium bg-bg-secondary">
                    <span className="text-sm font-medium text-fg-primary">Secondary</span>
                  </div>
                  <p className="text-sm text-fg-secondary">bg-bg-secondary</p>
                </div>
                <div className="space-y-4">
                  <div className="flex h-16 w-full items-center justify-center rounded-medium bg-bg-tertiary">
                    <span className="text-sm font-medium text-fg-primary">Tertiary</span>
                  </div>
                  <p className="text-sm text-fg-secondary">bg-bg-tertiary</p>
                </div>
                <div className="space-y-4">
                  <div className="flex h-16 w-full items-center justify-center rounded-medium bg-bg-accent">
                    <span className="text-sm font-medium text-content-on-color">Accent</span>
                  </div>
                  <p className="text-sm text-fg-secondary">bg-bg-accent</p>
                </div>
              </div>
            </div>

            {/* Status Colors */}
            <div className="mb-12">
              <h4 className="mb-6 text-lg font-medium">Status Colors</h4>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                <div className="space-y-4">
                  <div className="flex h-16 w-full items-center justify-center rounded-medium bg-bg-positive">
                    <span className="text-sm font-medium text-content-on-color">Success</span>
                  </div>
                  <p className="text-sm text-fg-secondary">bg-bg-positive</p>
                </div>
                <div className="space-y-4">
                  <div className="flex h-16 w-full items-center justify-center rounded-medium bg-bg-warning">
                    <span className="text-sm font-medium text-content-on-color">Warning</span>
                  </div>
                  <p className="text-sm text-fg-secondary">bg-bg-warning</p>
                </div>
                <div className="space-y-4">
                  <div className="flex h-16 w-full items-center justify-center rounded-medium bg-bg-negative">
                    <span className="text-sm font-medium text-content-on-color">Error</span>
                  </div>
                  <p className="text-sm text-fg-secondary">bg-bg-negative</p>
                </div>
              </div>
            </div>
          </div>

          {/* Primitive Colors */}
          <div className="mb-20">
            <h3 className="mb-10 text-xl font-medium">Primitive Colors</h3>
            
            {/* Gray Scale */}
            <div className="mb-12">
              <h4 className="mb-6 text-lg font-medium">Gray Scale</h4>
              <div className="grid grid-cols-6 gap-2 md:grid-cols-13">
                {grayShades.map((shade) => (
                  <div key={shade} className="space-y-2">
                    <div 
                      className={`h-12 w-full rounded-small border border-border-primary bg-gray-${shade}`} 
                    />
                    <p className="text-center text-xs text-fg-secondary">{shade}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Palettes */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {/* Blue */}
              <div>
                <h4 className="mb-6 text-lg font-medium">Blue</h4>
                <div className="grid grid-cols-5 gap-2">
                  {colorShades.map((shade) => (
                    <div key={shade} className="space-y-2">
                      <div className={`h-12 w-full rounded-small bg-blue-${shade}`} />
                      <p className="text-center text-xs text-fg-secondary">{shade}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Green */}
              <div>
                <h4 className="mb-6 text-lg font-medium">Green</h4>
                <div className="grid grid-cols-5 gap-2">
                  {colorShades.map((shade) => (
                    <div key={shade} className="space-y-2">
                      <div className={`h-12 w-full rounded-small bg-green-${shade}`} />
                      <p className="text-center text-xs text-fg-secondary">{shade}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Red */}
              <div>
                <h4 className="mb-6 text-lg font-medium">Red</h4>
                <div className="grid grid-cols-5 gap-2">
                  {colorShades.map((shade) => (
                    <div key={shade} className="space-y-2">
                      <div className={`h-12 w-full rounded-small bg-red-${shade}`} />
                      <p className="text-center text-xs text-fg-secondary">{shade}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Yellow */}
              <div>
                <h4 className="mb-6 text-lg font-medium">Yellow</h4>
                <div className="grid grid-cols-5 gap-2">
                  {colorShades.map((shade) => (
                    <div key={shade} className="space-y-2">
                      <div className={`h-12 w-full rounded-small bg-yellow-${shade}`} />
                      <p className="text-center text-xs text-fg-secondary">{shade}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing Section */}
        <section>
          <h2 className="mb-16 text-3xl font-semibold">Spacing</h2>
          <div className="space-y-8">
            {spacingTokens.map((size) => (
              <div key={size} className="flex items-center space-x-8">
                <div className="w-16 font-mono text-sm text-fg-secondary">{size}</div>
                <div 
                  className="h-8 rounded-small bg-bg-accent" 
                  style={{width: `var(--space-${size})`}} 
                />
                <div className="font-mono text-sm text-fg-tertiary">var(--space-{size})</div>
              </div>
            ))}
          </div>
        </section>

        {/* Border Radius Section */}
        <section>
          <h2 className="mb-16 text-3xl font-semibold">Border Radius</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {borderRadiusOptions.map(({ name, class: className }) => (
              <div key={name} className="space-y-4">
                <div className={`h-16 w-full bg-bg-accent ${className}`} />
                <div className="text-center">
                  <p className="text-sm font-medium">{name}</p>
                  <p className="text-xs text-fg-secondary">{className}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section>
          <h2 className="mb-16 text-3xl font-semibold">Typography</h2>
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl font-bold text-fg-primary">Heading 1 - The quick brown fox</h1>
              <p className="mt-2 text-sm text-fg-secondary">text-4xl font-bold</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-fg-primary">Heading 2 - The quick brown fox</h2>
              <p className="mt-2 text-sm text-fg-secondary">text-3xl font-semibold</p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-fg-primary">Heading 3 - The quick brown fox</h3>
              <p className="mt-2 text-sm text-fg-secondary">text-2xl font-medium</p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-fg-primary">Heading 4 - The quick brown fox</h4>
              <p className="mt-2 text-sm text-fg-secondary">text-xl font-medium</p>
            </div>
            <div>
              <h5 className="text-lg font-medium text-fg-primary">Heading 5 - The quick brown fox</h5>
              <p className="mt-2 text-sm text-fg-secondary">text-lg font-medium</p>
            </div>
            <div>
              <h6 className="text-base font-medium text-fg-primary">Heading 6 - The quick brown fox</h6>
              <p className="mt-2 text-sm text-fg-secondary">text-base font-medium</p>
            </div>
            <div>
              <p className="text-base text-fg-primary">
                Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="mt-2 text-sm text-fg-secondary">text-base</p>
            </div>
            <div>
              <p className="text-sm text-fg-secondary">
                Small text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="mt-2 text-sm text-fg-secondary">text-sm text-fg-secondary</p>
            </div>
          </div>
        </section>

        {/* Components Section */}
        <section>
          <h2 className="mb-16 text-3xl font-semibold">Components</h2>
          
          {/* Buttons */}
          <div className="mb-12">
            <h3 className="mb-8 text-xl font-medium">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="destructive">Destructive Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="link">Link Button</Button>
            </div>
          </div>

          {/* Inputs */}
          <div className="mb-12">
            <h3 className="mb-8 text-xl font-medium">Inputs</h3>
            <div className="max-w-md space-y-4">
              <Input placeholder="Default input" />
              <Input placeholder="Disabled input" disabled />
              <div className="space-y-2">
                <label className="text-sm font-medium text-fg-primary">Email</label>
                <Input type="email" placeholder="Enter your email" />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border-primary pt-16">
          <p className="text-sm text-fg-tertiary">
            This style guide showcases our design system tokens and components.
          </p>
        </footer>
      </div>
    </div>
  )
}