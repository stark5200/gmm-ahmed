/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'greenmarmot.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  

  // redirects

  //about
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/routes/about'
      }
    ]
  },
  async redirects() {
   return [
     {
       source: '/routes/about',
       destination: '/routes',
       permanent: true
     }
   ]
  },

  //capsules
  async rewrites() {
    return [
      {
        source: '/capsules',
        destination: '/routes/capsules'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/routes/capsules',
        destination: '/routes',
        permanent: true
      }
    ]
  },

  //contact
  async rewrites() {
    return [
      {
        source: '/contact',
        destination: '/routes/contact'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/routes/contact',
        destination: '/routes',
        permanent: true
      }
    ]
  },

  //location
  async rewrites() {
    return [
      {
        source: '/location',
        destination: '/routes/location'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/routes/location',
        destination: '/routes',
        permanent: true
      }
    ]
  },

  //threesixty
  async rewrites() {
    return [
      {
        source: '/threesixty',
        destination: '/routes/threesixty'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/routes/threesixty',
        destination: '/routes',
        permanent: true
      }
    ]
  },

  //oldCapsules
  async rewrites() {
    return [
      {
        source: '/oldCapsules',
        destination: '/routes/oldCapsules'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/routes/oldCapsules',
        destination: '/routes',
        permanent: true
      }
    ]
  },

  //testing
  async rewrites() {
    return [
      {
        source: '/testing',
        destination: '/routes/testing'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/routes/testing',
        destination: '/routes',
        permanent: true
      }
    ]
  }

}


module.exports = nextConfig
