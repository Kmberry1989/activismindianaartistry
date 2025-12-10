const url = 'CBMivwFBVV95cUxQeHkyekxqY0NEVFdKTXZ4TEoyXzBBQ3lsYTI3YlVHd0Y5RXFEdFp3eWtTZk4wbkNWcmlRWnROSUFiUW5xWGtSdHJWaWtMd1BOakM1VXYzZmJSX2pHUkVGbTF4ZHIwaEl5MEZKRy1VWmF1ZlNNQ1VTd2JSX3pDUDN1cnpla1V0dmNWa0dSb1hzN05MNEp0cnU4Y1lyei1tVFRmLUIweERTbThZU0JnNjRzSC1QZFBGVTY3RU1PdU1UYw';

try {
    const buffer = Buffer.from(url, 'base64');
    console.log('Decoded:', buffer.toString('utf8'));

    // Try standard base64url decoding
    const buffer2 = Buffer.from(url.replace(/-/g, '+').replace(/_/g, '/'), 'base64');
    console.log('Decoded (URL safe):', buffer2.toString('utf8'));
} catch (e) {
    console.error(e);
}
