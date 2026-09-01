/*
 * Script: Locket Pro Bypass
 * Ngày hết hạn: 1111-01-01T00:00:00Z
 */

let body = $response.body;

try {
    let obj = JSON.parse(body);

    if (obj) {
        if (!obj.data) obj.data = {};
        if (!obj.data.subscriber) obj.data.subscriber = {};

        obj.data.subscriber.status = "active";
        obj.data.subscriber.entitlements = {
            "pro": {
                "is_active": true,
                "expires_date": "1111-01-01T00:00:00Z"
            }
        };
        obj.data.subscriber.subscriptions = {
            "locket.gold.yearly": {
                "is_active": true,
                "expires_date": "1111-01-01T00:00:00Z"
            }
        };
    }

    body = JSON.stringify(obj);
} catch (e) {
    console.log("Lỗi xử lý JSON Locket: " + e);
}

$done({ body });
