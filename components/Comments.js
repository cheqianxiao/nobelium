import dynamic from 'next/dynamic'

const UtterancesComponent = dynamic(
  () => {
    return import('@/components/Utterances')
  },
  { ssr: false }
)

const Comments = ({ frontMatter }) => {
  return (
    <div>
      <UtterancesComponent issueTerm={frontMatter.id} />
    </div>
  )
}

export default Comments
