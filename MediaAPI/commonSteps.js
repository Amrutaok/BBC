import axios from 'axios';

// Global base_url
let getResponse;  // Store the API response globally for reuse
export const base_url = 'https://testapi.io/api/rmstest/media';
// Function to make a GET request to the API and validate response
export const validateBaseUrl = () =>
{
    return async ({ given }) =>
    {
        given('the MediaAPI endpoint', async () =>
        {
            expect(base_url).not.toBeNull();
            expect(typeof base_url).toBe('string');
        });
    };
};
/*export const validateBaseUrl = (base_url) =>
{
    return async ({ given }) =>
    {
        given('the MediaAPI endpoint', async () =>
        {
            expect(base_url).not.toBeNull();
            expect(typeof base_url).toBe('string');  // Ensure it's a string
        });
    };
};*/
export async function getApiResponse()
{
    try
    {
        // Fetching the API response
        getResponse = await axios.get(base_url);
        expect(getResponse).not.toBeNull();  // Ensure the response is not null
        expect(getResponse.data).toBeDefined();  // Ensure data is defined in response
        return getResponse;
    } catch (error)
    {
        console.error('Error fetching the API response:', error);
        throw error;
    }
}

// Function to parse JSON response and validate it's an object or array
export function parseAndValidateApiResponse()
{
    const myPlayList = JSON.parse(JSON.stringify(getResponse.data));

    expect(typeof myPlayList).toBe('object');
    expect(myPlayList).not.toBeNull();
    expect(Array.isArray(myPlayList.data)).toBe(true);  // Check if it's an array
    expect(myPlayList.data).toHaveLength(14);  // Ensure it has at least one item
    // Ensure the parsed data is either an array or contains a 'data' array
    if (Array.isArray(myPlayList))
    {
        expect(myPlayList).toHaveLengthGreaterThan(0);  // Ensure non-empty array
    } else if (myPlayList.data && Array.isArray(myPlayList.data))
    {
        expect(myPlayList.data.length).toBeGreaterThan(0);  // Ensure 'data' array has items
    } else
    {
        throw new Error("Invalid JSON structure: Expected array or object with 'data' key");
    }

    return myPlayList;  // Return the parsed data for further validation
}