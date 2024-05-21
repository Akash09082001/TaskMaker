import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"

const FieldWithLabel = ({
	label,
	id,
	component: Component = Textarea,
	...props
}) => {
	return (
		<div className="grid w-full max-w-3xl items-center gap-1.5">
			<Label htmlFor={id}>{label}</Label>
			<Component
				id={id}
				{...props}
			/>
		</div>
	)
}

export default FieldWithLabel
