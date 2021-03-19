# @alrale/downloads
download functions

## Install

```shell
yarn add @alrale/downloads
```

## Usage
```javascript
import { simpleDownload } from '@alrale/downloads';

simpleDownload(
        /**target string */
        JSON.stringify({ alrale: 'simpleDownload' }, null, '\t'),
        /**filename */
        'alrale.json'
    )
```