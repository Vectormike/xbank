class StatusFunc {
  static async statusHelper(req, res, status, error, data) {
    switch (status) {
      // Success
      case 200:
        return res.status(200).json({
          status: 200,
          data,
        });
      // Created
      case 201:
        return res.status(201).json({
          status: 201,
          data,
        });
      // Accepted, awaiting process
      case 202:
        return res.status(202).json({
          status: 202,
          data,
        });
      // Unauthorized
      case 401:
        return res.status(401).json({
          status: 401,
          data: error,
        });
      // Not found
      case 404:
        return res.status(404).json({
          status: 404,
          data: error,
        });
      // Internal server error
      case 500:
        return res.status(500).json({
          status: 500,
          data: error,
        });

      default:
        break;
    }
  }
}

export default StatusFunc;
