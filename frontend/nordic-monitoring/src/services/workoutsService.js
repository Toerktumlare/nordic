import axios from 'axios';

export function get() {
    return axios.get('http://localhost:8080/api/workouts');
    // return Promise.resolve([
    //     {
    //         "name":"Dagens Pass",
    //         "week": 40,
    //         "workoutDays": [
    //             {
    //                 "date": 1569798438,
    //                 "workouts": [
    //                     "A. EMOM 12 min @ 80% effort\n1-2 Hang Clean High Pull (from under knees)\n1-2 Hang Power Clean (under knees)\n1 Thruster (last 6 sets, switch to 1 Split Jerk)",
    //                     "3 X 7-8 min EMOM-blocks @ 85-90% strength effort. 1 min rest between.",
    //                     "B. EMOM 7-8 min:\n3-4 Front Squats -> 3-5 Back Squats\n(first 3 sets are front squats and the rest are back squats - increase weight slightly)",
    //                     "C. EMOM 7-8 min:\n6-8 slow-ish Seated, slight lean back double Dumbbell Press (set DBs down very gently)",
    //                     "D. EMOM 7-8 min:\n4-7 Strict Pull-ups (alt. behind head and regular if possible)"
    //                 ],
    //                 "instructions": [
    //                     "A. Hook grip on all pulling. Release in rack. Calm start from under knees but accelerate towards full extension and slight touch on middle of thighs. Solid rack and firmly planted feet in thrusters and in split jerk. Split jerk is with focus on timing and precision. Own the movements. Bring bar down gently, with control. Weights will probably not be heavy enough to require a dump.",
    //                     "B. No really heavy weights here. The volume and lack of rest will get to you. Focus on posture. Firmly planted feet. Go straight down and straight up with drive from ass. Front squats are done with a rack position similar to a general who is having a picture taken.",
    //                     "C. Sit on a bench with the back support almost upright. Do controlled, continuous dumbbell presses from deep rack position to fully extended arms. Exact positions of hands and arms are determined by you. Do them so that they are comfortable and you feel strong.",
    //                     "D. So beautiful pull-ups from straight arms up until chin is above bar OR bar is behind head. Alternate between the two versions but only do this if they cause no worrying discomfort. Throw away your ego on this one. Use a rubber band to get through all the sets with quality."
    //                 ]
    //             },
    //             {
    //                 "date": 1568898000,
    //                 "workouts": [
    //                     "A. EMOM X 12 sets @ 80% strength effort\n 1 Clean high pull\n 1 Hang Power Clean\n 1 Jerk dip squat\n 1 Split jerk",
    //                     "B. E4M X 5 sets @ 85-90% strength effort\n 10 controlled Back Squats\n 10 Dumbbell Bench press (set down gently)\n 10 Strict Pull-ups \n 4/4-6/6 90/90° Pigeon stretch + rotation"
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "name":"Dagens Pass",
    //         "week": 45,
    //         "workoutDays": [
    //             {
    //                 "date": 1569589200,
    //                 "workouts": [
    //                     "A. EMOM 12 min @ 80% effort\n1-2 Hang Clean High Pull (from under knees)\n1-2 Hang Power Clean (under knees)\n1 Thruster (last 6 sets, switch to 1 Split Jerk)",
    //                     "3 X 7-8 min EMOM-blocks @ 85-90% strength effort. 1 min rest between.",
    //                     "B. EMOM 7-8 min:\n3-4 Front Squats -> 3-5 Back Squats\n(first 3 sets are front squats and the rest are back squats - increase weight slightly)",
    //                     "C. EMOM 7-8 min:\n6-8 slow-ish Seated, slight lean back double Dumbbell Press (set DBs down very gently)",
    //                     "D. EMOM 7-8 min:\n4-7 Strict Pull-ups (alt. behind head and regular if possible)"
    //                 ]
    //             },
    //             {
    //                 "date": 1568898000,
    //                 "workouts": [
    //                     "A. EMOM X 12 sets @ 80% strength effort\n 1 Clean high pull\n 1 Hang Power Clean\n 1 Jerk dip squat\n 1 Split jerk",
    //                     "B. E4M X 5 sets @ 85-90% strength effort\n 10 controlled Back Squats\n 10 Dumbbell Bench press (set down gently)\n 10 Strict Pull-ups \n 4/4-6/6 90/90° Pigeon stretch + rotation"
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "name":"Fitness",
    //         "week": 44,
    //         "workoutDays": [
    //             {
    //                 "date": 1569619982,
    //                 "workouts": [
    //                     "A. EMOM 12 min @ 80% effort\n1-2 Hang Clean High Pull (from under knees)\n1-2 Hang Power Clean (under knees)\n1 Thruster (last 6 sets, switch to 1 Split Jerk)",
    //                     "3 X 7-8 min EMOM-blocks @ 85-90% strength effort. 1 min rest between.",
    //                     "B. EMOM 7-8 min:\n3-4 Front Squats -> 3-5 Back Squats\n(first 3 sets are front squats and the rest are back squats - increase weight slightly)",
    //                     "C. EMOM 7-8 min:\n6-8 slow-ish Seated, slight lean back double Dumbbell Press (set DBs down very gently)",
    //                     "D. EMOM 7-8 min:\n4-7 Strict Pull-ups (alt. behind head and regular if possible)"
    //                 ]
    //             }
    //         ]
    //     }
    // ]);
}