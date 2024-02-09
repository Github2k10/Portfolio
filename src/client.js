import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'uiw9kag7',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skXbwWAduQ4EKCelyrvjok2dT6GNzfZ1ol8GiBrFVOtWDPAXcmlIzQLZ3ekUp8QN0VJsNgKJMaZZOwdn02K8SIZRCl6X1c9RnKLmZu8XEXcO9aUFKL6lT39KElHckqiJjXNgpLid1ETTG1iEzlmGsiPjge9AmDAzFDS2k4w8Qhdqf1ZbNoVd',
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
