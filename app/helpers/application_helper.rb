module ApplicationHelper
  def flash_class_for(flash_type)
    case flash_type
    when 'notice'
      'alert--success'
    when 'alert'
      'alert--error'
    else
      flash_type.to_s
    end
  end
end
