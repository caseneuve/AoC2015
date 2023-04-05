(ns day19
  (:require [input :refer [f->str]]
            [clojure.set :refer [union difference]]))

;; part 1
(defn parse1 [it]
  (let [wx (re-seq #"\w+" it)]
    [(last wx)
     (->> wx butlast (partition 2) (reduce (fn [m [s r]] (update m (seq s) conj (seq r))) {}) vec)]))

(defn replace-one [m [st rs]]
  (let [len (count m), cm (count st)]
    (loop [n 0, a #{}]
      (if (> n len) a
          (let [[h t] ((juxt #(take n %) #(drop n %)) m), c (take cm t)]
            (recur
             (inc n)
             (cond-> a (= c st) (into (for [r rs] (apply str (concat h r (drop cm t))))))))))))

;; part 2, a brute solution (should be refactored by using analysis of the common patterns in the input
;; -- leaving for later :))

(defn parse2 [it]
  (let [wx (re-seq #"\w+" it)]
    [(last wx)
     (->> wx butlast (map seq) (partition 2) (map reverse))]))

(defn replacements [m [st rs]]
  (let [len (count m), cm (count st)]
    (loop [n 0, a #{}]
      (if (> n len) a
          (let [[h t] ((juxt #(take n %) #(drop n %)) m), c (take cm t)]
            (recur
             (inc n)
             (cond-> a (= c st) (conj (apply str (concat h rs (drop cm t)))))))))))

(defn part2 [it rep]
  (loop [[s n] [it 0], q (clojure.lang.PersistentQueue/EMPTY), seen #{it}]
    (cond (= s "e") n
          :else
          (let [cx (vec (difference (apply union (for [r rep] (replacements s r))) seen))]
            (if (empty? cx) (recur (peek q) (pop q) seen)
                (recur [(first cx) (inc n)] (into q (map #(vector % (inc n)) cx)), (into seen cx)))))))

(defn -main [day]
  (let [it (f->str day), [molecule replacements1] (parse1 it), [_ replacements2] (parse2 it)]
    {:part1 (count (apply union (for [r replacements1] (replace-one molecule r))))
     :part2 (part2 molecule replacements2)}))
