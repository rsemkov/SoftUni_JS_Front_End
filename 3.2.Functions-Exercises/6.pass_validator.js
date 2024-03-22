function pass_validator(the_pass) {

    function is_digit(char){
        return /\d/.test(char)
    }

    function is_letter(char){
        return /\w/.test(char)
    }

    function len_check() {
        return the_pass.length >= 6 && the_pass.length <= 10
    }

    function letters_and_digits_check() {
        let is_only_letters_and_digits = true

        for (ch of the_pass) {
            if (is_letter(ch) === false && is_digit(ch) === false) {
                is_only_letters_and_digits = false
            }

        }

        return is_only_letters_and_digits
        
    }

    function min_two_digits_count_check() {
        let digits_counter = 0

        for (ch of the_pass) {
            if (is_digit(ch)) {
                digits_counter += 1
            }
        }

        return digits_counter >= 2
        
    }

    function solve() {
        if (!len_check()) {
            console.log("Password must be between 6 and 10 characters")
        }
    
        if (!letters_and_digits_check()) {
            console.log("Password must consist only of letters and digits")
        }
    
        if (!min_two_digits_count_check()) {
            console.log("Password must have at least 2 digits")
        }
    
        let is_valid_pass = len_check() && letters_and_digits_check() && min_two_digits_count_check()
    
        if (is_valid_pass) {
            console.log("Password is valid")
        }

    }

    solve()

}
    

pass_validator('Pa$s$s')