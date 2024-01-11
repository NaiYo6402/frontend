export const configAXIOS = (method, path, data) => {
    return (
        {
            method: method,
            url: `${process.env.REACT_APP_API}/${path}`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data ? data : null
        }
    )
}