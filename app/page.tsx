import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">API Documentation</h1>
      <ul className="list-disc pl-5">
        <li className="mb-2">
          <Link href="/api" className="text-blue-500 hover:underline">
            API Documentation
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/api/list" className="text-blue-500 hover:underline">
            List Endpoint
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/api/rand" className="text-blue-500 hover:underline">
            Random Endpoint
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/api/info?file_code=example_code" className="text-blue-500 hover:underline">
            Info Endpoint (example)
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/api/search?q=example" className="text-blue-500 hover:underline">
            Search Endpoint (example)
          </Link>
        </li>
      </ul>
    </div>
  )
}

