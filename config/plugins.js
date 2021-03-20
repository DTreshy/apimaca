module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AKIAUJOJBQDD3KHECXVV'),
      secretAccessKey: env('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'),
      region: env('eu-central-1'),
      params: {
        Bucket: env('images.macahernandez.co'),
      },
    },
  },
});
