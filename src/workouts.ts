export type Exercise = {
  id: string
  translationKey: string
  name: string
  muscle: string
  prescription: string
  rpe: string
  rest: string
  tip: string
  why: string
  image?: string
}

export type WorkoutDay = {
  id: string
  label: string
  type: 'Upper' | 'Lower' | 'Cardio'
  focus: string
  exerciseIds: string[]
}

const asset = (name: string) => `exercises/${name}`

export const exerciseLibrary: Record<string, Omit<Exercise, 'id' | 'translationKey'>> = {
  chestRow: { name: 'Chest Supported Row', muscle: 'Back', prescription: '4 × 6', rpe: '8', rest: '2–3 min', tip: 'Keep your chest pinned down and drive elbows toward your hips.', why: 'Builds thick upper-back strength without loading the lower back.', image: asset('Chest Supported Row.gif') },
  inclineDb: { name: 'Incline Dumbbell Press', muscle: 'Chest', prescription: '4 × 6', rpe: '8', rest: '2–3 min', tip: 'Set a low incline, plant your feet, and lower with control.', why: 'Prioritizes upper-chest strength and balanced pressing.', image: asset('incline dumbbell bench press gif.gif') },
  pulldown: { name: 'Lat Pulldown', muscle: 'Back', prescription: '4 × 8', rpe: '8', rest: '90 sec', tip: 'Pull elbows down, pause at the chest, and avoid leaning back.', why: 'Adds lat width and reinforces strong vertical pulling.', image: asset('LAT_PULL_DOWN.gif') },
  pulldownB: { name: 'Lat Pulldown', muscle: 'Back', prescription: '4 × 8–10', rpe: '8', rest: '90 sec', tip: 'Lead with your elbows and let the lats stretch fully at the top.', why: 'Provides extra weekly lat volume for a wider back.', image: asset('LAT_PULL_DOWN.gif') },
  flatDb: { name: 'Flat Dumbbell Bench Press', muscle: 'Chest', prescription: '3 × 8', rpe: '8', rest: '2 min', tip: 'Tuck elbows slightly and keep shoulder blades pulled together.', why: 'Builds chest mass with a joint-friendly range of motion.', image: asset('Flat Dumbbell Bench Press.gif') },
  facePull: { name: 'Face Pull', muscle: 'Shoulders', prescription: '3 × 15', rpe: '7', rest: '60 sec', tip: 'Pull toward eyebrow level and rotate your thumbs behind you.', why: 'Supports healthy shoulders and strengthens rear delts.', image: asset('FACE_PULL-1.gif') },
  lateralA: { name: 'Dumbbell Lateral Raise', muscle: 'Shoulders', prescription: '4 × 12', rpe: '8', rest: '60 sec', tip: 'Lead with the elbows and stop around shoulder height.', why: 'Adds side-delt volume for broader-looking shoulders.', image: asset('Dumbbell-Lateral-Raise.gif') },
  lateralB: { name: 'Dumbbell Lateral Raise', muscle: 'Shoulders', prescription: '4 × 15', rpe: '8', rest: '60 sec', tip: 'Use a controlled arc; do not swing the weight up.', why: 'High-rep tension develops round, capped delts.', image: asset('Dumbbell-Lateral-Raise.gif') },
  pushdown: { name: 'Rope Triceps Pushdown', muscle: 'Triceps', prescription: '3 × 12', rpe: '8', rest: '60 sec', tip: 'Pin elbows to your sides and spread the rope at lockout.', why: 'Adds focused triceps volume without stressing the shoulders.', image: asset('Rope Triceps Pushdown.gif') },
  inclineCurl: { name: 'Seated Incline Dumbbell Curl', muscle: 'Biceps', prescription: '3 × 12', rpe: '8', rest: '60 sec', tip: 'Keep shoulders back and resist the weight on the way down.', why: 'Trains the biceps in a deep stretch for complete development.', image: asset('Seated-Incline-Dumbbell-Curl.gif') },
  squat: { name: 'Safety Bar Squat', muscle: 'Quads', prescription: '4 × 6', rpe: '8', rest: '3 min', tip: 'Brace before every rep and drive your knees over your toes.', why: 'Builds strong quads and legs with an upright torso.', image: asset('Safety Bar Squat.gif') },
  rdl: { name: 'Romanian Deadlift', muscle: 'Hamstrings', prescription: '3 × 8', rpe: '8', rest: '2–3 min', tip: 'Push hips back and keep the weight close to your legs.', why: 'Develops hamstrings, glutes, and posterior-chain strength.', image: asset('Romanian Deadlift.gif') },
  legPressA: { name: 'Leg Press', muscle: 'Quads', prescription: '3 × 10', rpe: '8', rest: '2 min', tip: 'Lower deeply without letting your hips roll off the pad.', why: 'Adds heavy quad volume after squats with stable support.', image: asset('Leg Press.gif') },
  legPressB: { name: 'Leg Press', muscle: 'Quads', prescription: '4 × 12', rpe: '8', rest: '2 min', tip: 'Control the descent and push evenly through the whole foot.', why: 'Anchors the second lower day with high-quality quad volume.', image: asset('Leg Press.gif') },
  legCurlA: { name: 'Seated Leg Curl', muscle: 'Hamstrings', prescription: '3 × 10', rpe: '8', rest: '75 sec', tip: 'Lock hips down and squeeze hard at full knee flexion.', why: 'Directly trains knee-flexion strength and hamstring size.', image: asset('SEAT_LEG_CURL-1.gif') },
  legCurlB: { name: 'Seated Leg Curl', muscle: 'Hamstrings', prescription: '4 × 12', rpe: '8', rest: '75 sec', tip: 'Use a full stretch and avoid rushing the return.', why: 'Adds a second weekly hamstring stimulus with low fatigue.', image: asset('SEAT_LEG_CURL-1.gif') },
  calfA: { name: 'Standing Calf Raise', muscle: 'Calves', prescription: '4 × 12', rpe: '8', rest: '60 sec', tip: 'Pause in the stretch and rise onto the big toe.', why: 'Builds calf strength through a complete range of motion.', image: asset('Standing Calf Raise.gif') },
  calfB: { name: 'Standing Calf Raise', muscle: 'Calves', prescription: '4 × 15', rpe: '8', rest: '60 sec', tip: 'Avoid bouncing; own both the top and bottom positions.', why: 'Higher reps add useful calf volume without much recovery cost.', image: asset('Standing Calf Raise.gif') },
  plank: { name: 'Plank', muscle: 'Core', prescription: '3 × 30–45 sec', rpe: '7', rest: '60 sec', tip: 'Squeeze glutes and pull your ribs down toward your pelvis.', why: 'Builds bracing strength that carries into every heavy lift.', image: asset('Plank.jpg') },
  chestPress: { name: 'Incline Chest Press', muscle: 'Chest', prescription: '4 × 10', rpe: '8', rest: '2 min', tip: 'Keep your upper back set and stop just short of elbow lockout.', why: 'Adds stable upper-chest volume with consistent tension.', image: asset('Incline-Chest-Press-Machine.gif') },
  cableRow: { name: 'Cable Row', muscle: 'Back', prescription: '4 × 10', rpe: '8', rest: '90 sec', tip: 'Stay tall and pull toward your lower ribs without shrugging.', why: 'Develops mid-back thickness with smooth resistance.', image: asset('Cable Row.gif') },
  pecDeck: { name: 'Pec Deck Fly', muscle: 'Chest', prescription: '3 × 12', rpe: '8', rest: '75 sec', tip: 'Keep a soft elbow and bring your biceps toward each other.', why: 'Finishes the chest with focused adduction and a deep stretch.', image: asset('Pec-Deck-Fly.gif') },
  rearDelt: { name: 'Rear Delt Fly', muscle: 'Shoulders', prescription: '4 × 15', rpe: '8', rest: '60 sec', tip: 'Move from the shoulder and keep your traps relaxed.', why: 'Balances pressing volume and develops the back of the shoulders.', image: asset('Rear Delt Fly.gif') },
  hammer: { name: 'Seated Hammer Curl', muscle: 'Biceps', prescription: '3 × 12', rpe: '8', rest: '60 sec', tip: 'Keep palms facing in and elbows still throughout.', why: 'Builds the brachialis and forearms for thicker arms.', image: asset('Seated-Hammer-Curl.gif') },
  overheadTri: { name: 'Overhead Triceps Extension', muscle: 'Triceps', prescription: '3 × 12', rpe: '8', rest: '60 sec', tip: 'Keep elbows pointed forward and reach a full stretch overhead.', why: 'Targets the long head of the triceps in its lengthened position.', image: asset('Overhead Triceps Extension.gif') },
  splitSquat: { name: 'Bulgarian Split Squat', muscle: 'Quads', prescription: '3 × 10', rpe: '8', rest: '90 sec', tip: 'Drop the back knee down and keep the front foot planted.', why: 'Builds single-leg strength and corrects side-to-side imbalances.', image: asset('Bulgarian Split Squat.gif') },
  hipThrust: { name: 'Hip Thrust', muscle: 'Glutes', prescription: '3 × 10', rpe: '8', rest: '2 min', tip: 'Tuck the pelvis and pause at full hip extension.', why: 'Provides direct glute overload with minimal lower-back fatigue.', image: asset('Hip Thrust.gif') },
  kneeRaise: { name: 'Hanging Knee Raises', muscle: 'Core', prescription: '3 × 12', rpe: '8', rest: '60 sec', tip: 'Curl your pelvis upward; avoid swinging from the hips.', why: 'Trains dynamic trunk flexion and lower-ab control.', image: asset('Hanging-Knee-Raises.gif') },
  pallof: { name: 'Pallof Press', muscle: 'Core', prescription: '3 × 12 / side', rpe: '7', rest: '45 sec', tip: 'Stay square and resist the cable pulling you into rotation.', why: 'Builds anti-rotation strength for a stable, resilient trunk.', image: asset('Pallof Press.gif') },
  treadmill15: { name: 'Treadmill Walk', muscle: 'Cardio', prescription: '15 min', rpe: '5–6', rest: '—', tip: 'Use a brisk pace and slight incline while staying tall.', why: 'Builds aerobic capacity without interfering with recovery.', image: asset('incline walk.gif') },
  treadmill20: { name: 'Treadmill Walk', muscle: 'Cardio', prescription: '20 min', rpe: '5–6', rest: '—', tip: 'Maintain a pace where you can still speak in short sentences.', why: 'Extends low-impact conditioning and supports work capacity.', image: asset('incline walk.gif') },
  stairs1: { name: 'StairMaster', muscle: 'Cardio', prescription: '15–20 min', rpe: '6–7', rest: '—', tip: 'Use light hand support and drive through each full step.', why: 'Improves conditioning while adding glute and leg endurance.', image: asset('stair master.gif') },
  stairs2: { name: 'StairMaster', muscle: 'Cardio', prescription: '15–20 min', rpe: '6–7', rest: '—', tip: 'Keep a steady rhythm you can sustain without leaning on the rails.', why: 'Finishes the week with focused, low-skill conditioning.', image: asset('stair master.gif') },
}

export const workoutDays: WorkoutDay[] = [
  { id: 'upper-a', label: 'Upper A', type: 'Upper', focus: 'Strength · Push / Pull', exerciseIds: ['chestRow','inclineDb','pulldown','flatDb','facePull','lateralA','pushdown','inclineCurl'] },
  { id: 'lower-a', label: 'Lower A', type: 'Lower', focus: 'Strength · Legs / Core', exerciseIds: ['squat','rdl','legPressA','legCurlA','calfA','plank'] },
  { id: 'upper-b', label: 'Upper B', type: 'Upper', focus: 'Hypertrophy · Push / Pull', exerciseIds: ['pulldownB','chestPress','cableRow','pecDeck','rearDelt','lateralB','hammer','overheadTri'] },
  { id: 'lower-b', label: 'Lower B', type: 'Lower', focus: 'Hypertrophy · Legs / Core', exerciseIds: ['legPressB','splitSquat','hipThrust','legCurlB','calfB','kneeRaise','pallof'] },
  { id: 'cardio-1', label: 'Cardio 1', type: 'Cardio', focus: 'Zone 2 · Conditioning', exerciseIds: ['treadmill15','stairs1'] },
  { id: 'cardio-2', label: 'Cardio 2', type: 'Cardio', focus: 'Endurance · Conditioning', exerciseIds: ['treadmill20','stairs2'] },
]

export const exercisesForDay = (day: WorkoutDay): Exercise[] =>
  day.exerciseIds.map((id) => ({ id: `${day.id}-${id}`, translationKey: id, ...exerciseLibrary[id] }))

export const allMuscles = ['All', ...Array.from(new Set(Object.values(exerciseLibrary).map((e) => e.muscle)))]
