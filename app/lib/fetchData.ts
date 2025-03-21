/**
 * In-memory cache for data
 */
let cachedData: any = null

/**
 * Timestamp of when the data was last fetched
 */
let lastFetchTime = 0

/**
 * Cache duration in milliseconds (24 hours)
 */
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

/**
 * Fetches data with caching for 24 hours
 * @returns The cached data if valid, or newly fetched data
 */
export async function fetchDataWithCache() {
  const currentTime = Date.now()

  // Return cached data if it exists and is still valid (less than 24 hours old)
  if (cachedData && currentTime - lastFetchTime < CACHE_DURATION) {
    console.log("Using cached data, cache age:", Math.round((currentTime - lastFetchTime) / 1000 / 60), "minutes")
    return cachedData
  }

  try {
    console.log("Cache expired or not found, fetching fresh data...")
    const response = await fetch("https://a.cewe.pro/data.json")

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`)
    }

    cachedData = await response.json()
    lastFetchTime = currentTime
    console.log("Data successfully cached at:", new Date(lastFetchTime).toISOString())
    return cachedData
  } catch (error) {
    console.error("Failed to fetch data:", error)

    // If we have stale cached data, return it as fallback
    if (cachedData) {
      console.log("Returning stale cached data as fallback")
      return cachedData
    }

    throw new Error("Failed to fetch data and no cached data available")
  }
}

