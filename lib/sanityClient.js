import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '2xjjynif',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sktG0TJaRy0ACmlB3iiXiphvMOTVM9yzjKFVBcrZuDyHqeau8mvByugCvjR5qB1ajTgqlG3wLix9QmzAVMhx13Im795CQ0sBD08EXcmQOJVgWqAnTmnY8vuYQVRLcdY3sEUPNwnmZ8yPCnhdyM2WyyxCFWVihyXOLSK4WokAuQxpDoRLiPsi',
  useCdn: false,
})
