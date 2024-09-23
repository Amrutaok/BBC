import { defineFeature, loadFeature } from 'jest-cucumber';
import { getApiResponse, parseAndValidateApiResponse, validateBaseUrl } from '../../commonSteps';

const feature = loadFeature('MediaAPI/Features/respCodeTime.feature');
let response;
let responseTime;
defineFeature(feature, (test) =>
{
    test('Response Status', ({ given, when, then }) =>
    {
        validateBaseUrl()({ given });

        when('a Get request is made', async () =>
        {
            response = await getApiResponse();  // Use the base_url
        });

        then('The response status should be 200', () =>
        {
            expect(response.status).toBe(200);  // Check if response status is 200
        });
    });
    test('Response Time', ({ given, when, then }) =>
    {
        validateBaseUrl()({ given });

        when('a Get request is made', async () =>
        {
            const startTime = Date.now();
            response = await getApiResponse();
            responseTime = Date.now() - startTime;

            expect(response).not.toBeNull();
        });
        then('the response time should be less than 1000 milliseconds', () =>
        {
            expect(responseTime).toBeLessThan(1000);
        });
    });
});

