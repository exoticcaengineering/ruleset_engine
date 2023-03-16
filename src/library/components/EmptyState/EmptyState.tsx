import Button from '../../ui/Button';
import { EmptyStateWrapper } from './EmptyState.styles';

type Props = {
  switchView: () => void
}

const EmptyState = ({switchView}: Props) => {
  return (
    <EmptyStateWrapper>
        <p>Define rules for discounts to apply to products that belong to various combined filters</p>
        <Button text={'+ Add rule'} onClick={switchView}/>
    </EmptyStateWrapper>
  )
}

export default EmptyState